import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../../services/course-service";

export default class CourseManager
    extends React.Component {
  state = {
    title: "example title",
    courses: [],
    date: new Date(),
  }

  componentDidMount() {
    courseService.findAllCourses()
    .then(courses => this.setState({courses}))
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(c => {
        if (c._id === course._id) {
          return course
        } else {
          return c
        }
      })
    })))
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
    .then(status => {
      this.setState((prevState) => ({
        courses: prevState.courses.filter(c => c._id !== course._id)
      }))
    })
  }

  addCourse = () => {
    document.getElementById("new-course-title").value=""
    const newCourse = {
      title: this.state.title,
      owner: "me",
      lastModified: this.state.date.getFullYear() + "/" + this.state.date.getMonth()
          + "/" + this.state.date.getDate()
    }
    courseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
            course,
            ...prevState.courses
          ]
        })))
  }

  updateInputTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return(
        <div>
          <div className="wbdv-sticky-nav-bar">
            <div className="row align-items-center">
              <div className="col-1">
                <i className="fas fa-bars fa-2x"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Course Manager
              </div>
              <div className="col-7">
                <input
                    onChange={this.updateInputTitle}
                    id="new-course-title"
                    value={this.title}
                    className="form-control"
                    placeholder="New Course Title"/>
              </div>
              <div className="col-1">
                <i onClick={this.addCourse} className="fas fa-plus-square fa-2x"></i>
              </div>
            </div>
          </div>

          <div className="content-padding">
            <Route path="/courses/grid">
              <CourseGrid
                  updateCourse={this.updateCourse}
                  deleteCourse={this.deleteCourse}
                  courses={this.state.courses}/>
            </Route>
            <Route path="/courses/table">
              <CourseTable
                  updateCourse={this.updateCourse}
                  deleteCourse={this.deleteCourse}
                  courses={this.state.courses}/>
            </Route>
          </div>
        </div>
    )
  }
}
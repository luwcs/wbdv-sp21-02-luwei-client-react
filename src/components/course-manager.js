import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
  extends React.Component {
  state = {
    courses: []
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
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "2/10/2021"
    }
    courseService.createCourse(newCourse)
      .then(actualCourse => {
        this.state.courses.push(actualCourse)
        this.setState(this.state) // notify state has changed and re-render
      })
  }

  render() {
    return(
      <div>
        <h1>Course Manager</h1>
        <button onClick={this.addCourse}>
          Add Course
        </button>

        <Route path="/courses/grid">
          <CourseGrid courses={this.state.courses}/>
        </Route>
        <Route path="/courses/table">
          <CourseTable
            updateCourse={this.updateCourse}
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}/>
        </Route>
      </div>
    )
  }
}




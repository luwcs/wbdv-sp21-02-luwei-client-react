import React from 'react'
import {Link} from "react-router-dom"
import CourseCard from "./course-card";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className="container-fluid wbdv-course-grid">
      <div className="row justify-content-end">

        <div className="col-4 align-self-center d-none d-md-block">
          Recent Courses
        </div>
        <div className="col-4 align-self-center d-none d-md-block">
          Owned by me
          &nbsp;&nbsp;&nbsp;
          <i class="fas fa-caret-down"></i>
        </div>

        <div className="col-auto align-self-center">
          <button type="button" className="btn">
            <i className="fas fa-2x fa-folder"></i>
          </button>
          <button type="button" className="btn">
            <i className="fas fa-2x fa-sort-alpha-down"></i>
          </button>
          <button type="button" className="btn">
            <Link to="/courses/table">
              <i className="fas fa-2x fa-list float-right"></i>
            </Link>
          </button>
        </div>
      </div>

      <div className="row">
        {
          courses.map((course) =>
              <CourseCard key={course._id}
                          course={course}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}/>
          )
        }
      </div>

    </div>


export default CourseGrid


// <div className="card" style={{width: "18rem"}}>
// <img src="..." className="card-img-top" alt="..."/>
//     <div className="card-body">
//     <h5 className="card-title">{course.title}</h5>
// <p className="card-text">Some quick example text to build on the
// card title and make up the bulk of the card's content.</p>
// <Link to="/editor" className="btn btn-primary">
// Go somewhere
// </Link>
// </div>
// </div>
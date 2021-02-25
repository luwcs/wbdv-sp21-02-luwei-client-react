import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {course,
     deleteCourse,
     updateCourse}
    ) => {
  const [editing, setEditing] = useState(false);
  const [courseTitle, setCourseTitle] = useState(course.title);

  const saveCourse = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: courseTitle
    }
    updateCourse(newCourse)
  }

  return ( <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1 my-3">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" alt="Card image cap"></img>
      {/*<img src="..." className="card-img-top" alt="..."/>*/}

      <div className="card-body">
        {
          !editing &&
          <Link to="/courses/editor">
            <h5 className="card-title">{courseTitle}</h5>
          </Link>
        }
        {
          editing &&
          <input
              onChange={(event) => setCourseTitle(event.target.value)}
              value={courseTitle}
              id="editedCourseTitle"
              className="form-control"/>
        }
        <p className="card-text">Some description</p>

        <Link to="/editor" className="btn btn-primary">
          {course.title}
        </Link>

        <div className="float-right">
          {editing && <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>}
          {editing && <i onClick={() => saveCourse()} className="fas fa-check"></i>}
          {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}`
        </div>

      </div>
    </div>
  </div>)
}

export default CourseCard
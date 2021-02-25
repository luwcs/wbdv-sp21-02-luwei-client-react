import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
      <Link to={"/courses"}>
        <i className={"fas fa-arrow-left"}></i>
      </Link>
      <span onClick={() => history.goBack()}>Go Back</span>
      <h2>Course Editor</h2>
    </div>

export default CourseEditor
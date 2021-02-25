import React from 'react'
import {Link} from "react-router-dom";

const Home = () =>
    <div className="container-fluid">
      <h1>Home</h1>
      <div className="list-group">
        <Link to="/courses/table" className="list-group-item">
          Courses Table
        </Link>
        <br/>
        <Link to="/courses/grid" className="list-group-item">
          Courses Grid
        </Link>
        <br/>
        <Link to="/courses/editor" className="list-group-item">
          Course Editor
        </Link>
      </div>
    </div>

export default Home
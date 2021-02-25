import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
      <Link to={"/courses"}>
        <i className={"fas fa-arrow-left"}></i>
      </Link>
      <span onClick={() => history.goBack()}>Go Back</span>
      <h2>Course Editor</h2>

      <div className="container bg-dark">
        <nav className="navbar navbar-dark shadow-sm">
          <div className="col-4">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link text-light" href="../index.html">
                  <i className="fas fa-times"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">CS5610 - WebDev</a>
              </li>
            </ul>
          </div>

          <div className="col-8">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Build</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bg-dark text-light"
                   href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Theme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Apps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </li>
            </ul>
          </div>

        </nav>

        <div className="row">
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">
                Module 1 - jQuery
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item active">
                Module 2 - React
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item">
                Module 3 - Redux
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item">
                Module 4 - Native
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item">
                Module 5 - Angular
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item">
                Module 6 - Node
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item">
                Module 7 - Mongo
                <i className="fas fa-times float-right"></i>
              </li>
              <li className="list-group-item">
                <i className="fas fa-plus float-right"></i>
              </li>

            </ul>
          </div>

          <div className="col-8 bg-white">
            <br/>

            <ul className="nav nav-pills">
              <li className="nav-item wbdv-margin">
                <a className="nav-link bg-dark text-white" href="#">Topic 1</a>
              </li>
              <li className="nav-item wbdv-margin">
                <a className="nav-link active bg-dark" href="#">Topic 2</a>
              </li>
              <li className="nav-item wbdv-margin">
                <a className="nav-link bg-dark text-white" href="#">Topic 3</a>
              </li>
              <li className="nav-item wbdv-margin">
                <a className="nav-link bg-dark text-white" href="#">Topic 4</a>
              </li>
              <li className="nav-item wbdv-margin">
                <a className="nav-link bg-dark text-white" href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </li>
            </ul>

            <br/>
            <div className="d-flex justify-content-center">
              Content intentionally left blank
            </div>
          </div>
        </div>
      </div>


    </div>

export default CourseEditor
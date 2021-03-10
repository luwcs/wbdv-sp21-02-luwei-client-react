import React from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";

const LessonTabs = ({lessons=[]}) =>

      <nav className="navbar navbar-dark bg-dark shadow-sm">

          <ul className="nav nav-tabs">
            {
              lessons.map(lesson =>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                      <EditableItem item={lesson}/>
                    </a>
                  </li>
              )
            }

            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                <i className="fas fa-plus"></i>
              </a>
            </li>
          </ul>

      </nav>


const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({})

export default connect(stpm, dtpm)(LessonTabs)
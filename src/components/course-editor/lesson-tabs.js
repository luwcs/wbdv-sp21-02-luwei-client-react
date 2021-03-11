import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item"
import {useParams} from "react-router-dom"
import lessonService from '../../services/lesson-service'
// import "./course-editor.style.client.css"

const LessonTabs = (
  {
    lessons=[],
    findLessonsForModule,
    createLessonForModule,
    updateLesson,
    deleteLesson,
    clear
  }) => {

  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    console.log("LOAD LESSONS FOR MODULE: " + moduleId)
    if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
      clear().then(() => findLessonsForModule(moduleId))
    }
  }, [moduleId])
  return (
    <nav className="navbar navbar-dark shadow-sm">

        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>

                <li className="nav-item segmentsList">
                  <a className="nav-link text-light" href="#">
                    <EditableItem
                        active={lesson._id === lessonId}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                        type="nav-item"
                        highLightColor="text-dark"
                        updateItem={updateLesson}
                        deleteItem={deleteLesson}
                        key={lesson._id}
                        item={lesson}
                    />
                  </a>
                </li>
            )
          }

          <button className="btn"
                  onClick={() => createLessonForModule(moduleId)}>
            <i className="fas fa-plus"></i>
          </button>

        </ul>

      </nav>
  )}




const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
  createLessonForModule: (moduleId) => {
    if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
    lessonService
    .createLessonForModule(moduleId, {title: "New Lesson"})
    .then(lesson => dispatch({
      type: "CREATE_LESSON",
      lesson
    }))
    } else {
      alert("Please select a module");
    }
  },
  deleteLesson: (item) =>
      lessonService.deleteLesson(item._id)
      .then(status => dispatch({
        type: "DELETE_LESSON",
        lessonToDelete: item
      })),

  updateLesson: (lesson) => {
    lessonService.updateLesson(lesson._id, lesson)
    .then(status => dispatch({
      type: "UPDATE_LESSON",
      lesson
    }))
  },
  clear: () => {
    dispatch({
      type: "CLEAR_TOPICS"
    })
    return Promise.resolve()
  },
  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => {
      dispatch({
        type: "FIND_LESSONS",
        lessons
      })
    })
  },
})

export default connect(stpm, dtpm)(LessonTabs)
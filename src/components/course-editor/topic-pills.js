import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
      topics=[],
      findTopicsForLesson,
      createTopicForLesson,
      updateTopic,
      deleteTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
      console.log("LOAD Topics FOR Lesson: " + lessonId)
      if(moduleId !== "undefined" && typeof moduleId !== "undefined" &&
          lessonId !== "undefined" && typeof lessonId !== "undefined") {
        findTopicsForLesson(lessonId)
      }
    }, [lessonId])
    return (
      <div>
        <ul className="nav nav-pills">
          {
            topics.map(topic =>
                // <li className="nav-item wbdv-margin">
                  <a className="nav-link text-white" href="#">
                    <EditableItem
                        active={topic._id === topicId}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        item={topic}
                        type="nav-item"
                        updateItem={updateTopic}
                        deleteItem={deleteTopic}
                        key={topic._id}
                    />
                  </a>
                // </li>
            )
          }
          <li className="list-group-item text-primary text-center border-0">
            <button className="btn"
                    onClick={() => createTopicForLesson(lessonId)}>
              <i className="fas fa-plus"></i>
            </button>
          </li>

        </ul>

        <br/>
        <div className="d-flex justify-content-center">
          Content intentionally left blank
        </div>
    </div>
    )}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId)
    .then(topics => dispatch({
      type: "FIND_TOPICS",
      topics
    }))
  },
  createTopicForLesson: (lessonId) => {
    if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
    topicService
    .createTopicForLesson(lessonId, {title: "New Topic"})
    .then(topic => dispatch({
      type: "CREATE_TOPIC",
      topic
    }))
    } else
        alert("Please select a lesson");
  },
  deleteTopic: (topic) =>
      topicService.deleteTopic(topic._id)
      .then(status => dispatch({
        type: "DELETE_TOPIC",
        topicToDelete: topic
      })),

  updateTopic: (topic) =>
      topicService.updateTopic(topic._id, topic)
      .then(status => dispatch({
        type: "UPDATE_TOPIC",
        topic
      }))
})

export default connect(stpm, dtpm)(TopicPills)
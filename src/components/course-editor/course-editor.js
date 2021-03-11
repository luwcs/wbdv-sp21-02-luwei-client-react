import React from 'react'
import {useHistory, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})

const store = createStore(reducer)


const CourseEditor = (props) => {
  const {courseId, moduleId} = useParams();
  let history = useHistory();

  return (
    <Provider store={store}>
    <div>

      <div className="row">
        <div className="col-4">
          <ModuleList/>
        </div>
        <div className="col-8">
          <LessonTabs/>
          <TopicPills/>
        </div>

      </div>

    </div>
    </Provider>)
}

export default CourseEditor
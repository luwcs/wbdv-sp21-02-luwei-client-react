import React,{useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import CourseService from "../../services/course-service";
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer,
  widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
  const {layout, courseId, moduleId} = useParams();
  const [course, setCourse] = useState({title: ""});

  useEffect(() => {
    CourseService.findCourseById(courseId).then(c => setCourse(c))
  }, [courseId])

  return (
    <Provider store={store}>
    <div className="container-fluid">
      <div className="row h2">
        <Link className="m-2" to={`/courses/${layout}`}>
          <i className="fas fa-times text-dark"></i>
        </Link>
        <span className="m-2">{`${course.title}`}</span>
      </div>

      <div className="row">
        <div className="col-3">
          <ModuleList/>
        </div>
        <div className="col-9">
          <LessonTabs/>
          <TopicPills/>
          <WidgetList/>
        </div>

      </div>

    </div>
    </Provider>)
}

export default CourseEditor



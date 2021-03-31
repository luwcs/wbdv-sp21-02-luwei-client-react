import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import "./course-editor.style.client.css";
import moduleActions from "../../actions/module-actions";

const ModuleList = (
    {
      modules=[],
      createModule,
      deleteModule,
      updateModule,
      clear,
      findModulesForCourse,
      active
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
      clear().then(() => findModulesForCourse(courseId))
    }, [])
    return (
      <div>
        <ul className="list-group">
          {
            modules.map(module =>
              // <li className="list-group-item">   // </li>
            <a>
                <EditableItem
                    key={module._id}
                    to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                    updateItem={updateModule}
                    deleteItem={deleteModule}
                    active={module._id === moduleId}
                  item={module}/>
            </a>
            )
          }
          <li className="list-group-item">
            <button className="btn"
                    onClick={() => createModule(courseId)}
            >
              <i className="fas fa-plus"></i>
            </button>
            {/*<i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>*/}
          </li>
        </ul>

      </div>

    )}

// stateToPropertyMapper
const stpm = (state) => {
  return {
    modules: state.moduleReducer.modules
  }
}

const dtpm = (dispatch) => {
  return {
    createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
    deleteModule: (item) => moduleActions.deleteModule(dispatch, item),
    updateModule: (module) => moduleActions.updateModule(dispatch, module),
    clear: () => moduleActions.clear(dispatch),
    findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
  }
}

export default connect(stpm, dtpm)(ModuleList)

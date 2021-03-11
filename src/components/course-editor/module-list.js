import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
      modules=[],
      createModule,
      deleteModule,
      updateModule,
      clear,
      findModulesForCourse
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
              <li className="list-group-item">
                <EditableItem
                    key={module._id}
                    to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                    updateItem={updateModule}
                    deleteItem={deleteModule}
                    active={module._id === moduleId}
                  item={module}/>
              </li>
            )
          }
          <li className="list-group-item">
            <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
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
    createModule: (courseId) => {
      moduleService.createModuleForCourse(courseId, {title: "New Module"})
      .then(theActualModule => dispatch({
        type: "CREATE_MODULE",
        module: theActualModule
      }))
    },
    deleteModule: (item) =>
        moduleService.deleteModule(item._id)
        .then(status => dispatch({
          type: "DELETE_MODULE",
          moduleToDelete: item
        })),
    updateModule: (module) =>
        moduleService.updateModule(module._id, module)
        .then(status => dispatch({
          type: "UPDATE_MODULE",
          module
        })),
    clear: () => {
      dispatch({
        type: "CLEAR_LESSONS"
      })
      dispatch({
        type: "CLEAR_TOPICS"
      })
      return Promise.resolve()
    },
    findModulesForCourse: (courseId) => {
      // alert(courseId);
      moduleService.findModulesForCourse(courseId)
      .then(theModules => {
        dispatch({
          type: "FIND_MODULES_FOR_COURSE",
          modules: theModules
        })
      })
    }
  }
}

export default connect(stpm, dtpm)(ModuleList)

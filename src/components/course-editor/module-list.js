import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const ModuleList = (
    {
      modules=[],
      createModule,
      deleteModule,
      updateModule
    }) =>
    <div>
      <ul className="list-group">
        {
          modules.map(m =>
            <li className="list-group-item">
              <EditableItem
                updateItem={updateModule}
                deleteItem={deleteModule}
                item={m}/>
            </li>
          )
        }
        <li className="list-group-item">
          <i onClick={createModule} className="fas fa-plus fa-2x"></i>
        </li>
      </ul>

    </div>

// stateToPropertyMapper
const stpm = (state) => {
  return {
    modules: state.moduleReducer.modules
  }
}

const dtpm = (dispatch) => {
  return {
    createModule: () => dispatch({type: "CREATE_MODULE"}),
    deleteModule: (module) => dispatch({
      type: "DELETE_MODULE",
      moduleToDelete:module
    }),
    updateModule: (module) => dispatch({
      type: "UPDATE_MODULE",
      module
    })
  }
}

export default connect(stpm, dtpm)(ModuleList)
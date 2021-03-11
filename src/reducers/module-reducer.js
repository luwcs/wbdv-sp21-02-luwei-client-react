const initialState = {
  modules: [
    // {_id: 1, title: "Module 1 - jQuery"},
    // {_id: 2, title: "Module 2 - React"},
    // {_id: 3, title: "Module 3 - Redux"},
    // {_id: 4, title: "Module 4 - Native"},
    // {_id: 5, title: "Module 5 - Angular"},
    // {_id: 6, title: "Module 6 - Node"},
    // {_id: 7, title: "Module 7 - Mongo"},
  ]
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }

    case "CREATE_MODULE":
      const newState = {
        modules: [
          ...state.modules,
          action.module
        ]
      }
      return newState

    case "DELETE_MODULE":
      const newState1 = {
        modules: state.modules.filter(module => {
          if(module._id === action.moduleToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1

    case "UPDATE_MODULE":
      return {
        ...state,
        modules: state.modules.map(m => {
          if (m._id === action.module._id) {
            return action.module
          } else {
            return m
          }
        })
      }
    default:
      return state
  }
}

export default moduleReducer

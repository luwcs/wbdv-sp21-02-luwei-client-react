const initialState = {
  widgets: [
    // {_id: "1", title: "widget 1"},
    // {_id: "2", title: "widget 2"},
    // {_id: "3", title: "widget 3"}
  ]
}

const widgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
    case "FIND_WIDGETS":
      return {
        ...state,
        widgets: action.widgets
      }
    case "DELETE_WIDGET":
      const newState1 = {
        widgets: state.widgets.filter(widget => widget.id !== action.widgetToDelete.id)
      }
      return newState1
    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(w => w.id !== action.widget.id ? w : action.widget)
      }
    case "CLEAR_WIDGET":
      return {
        ...state,
        widgets: []
      }
    default:
      return state
  }
}

export default widgetReducer
const initialState = {
  lessons: [
    // {_id: "1", title: "Lesson 1"},
    // {_id: "2", title: "Lesson 2"},
    // {_id: "3", title: "Lesson 3"}
  ]
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
    case "FIND_LESSONS":
      return {
        ...state,
        lessons: action.lessons
      }
    case "DELETE_LESSON":
      const newState1 = {
        lessons: state.lessons.filter(lesson => {
          if(lesson._id === action.lessonToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(l => {
          if(l._id === action.lesson._id) {
            return action.lesson
          } else {
            return l
          }
        })
      }
    case "CLEAR_LESSONS":
      return {
        ...state,
        lessons: []
      }
    default:
      return state
  }
}

export default lessonReducer
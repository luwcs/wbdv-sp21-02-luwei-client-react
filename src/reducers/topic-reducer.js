const initialState = {
  topics: [
    // {_id: "1", title: "Topic 1"},
    // {_id: "2", title: "Topic 2"},
    // {_id: "3", title: "Topic 3"},
  ]
}

const topicReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    case "FIND_TOPICS":
      return {
        ...state,
        topics: action.topics
      }
    case "CLEAR_TOPICS":
      return {
        ...state,
        topics: []
      }
    case "DELETE_TOPIC":
      const newState1 = {
        topics: state.topics.filter(topic => {
          if(topic._id === action.topicToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    case "UPDATE_TOPIC":
      return {
        topics: state.topics.map(topic => {
          if(topic._id === action.topic._id) {
            return action.topic
          } else {
            return topic
          }
        })
      }
    default:
      return state
  }
}

export default topicReducer
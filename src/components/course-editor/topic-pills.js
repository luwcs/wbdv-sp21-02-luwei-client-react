import React from 'react'
import {connect} from 'react-redux'

const TopicPills = ({topics=[]}) =>
    <div>
        <ul className="nav nav-pills bg-dark">

          {
            topics.map(topic =>
                <li className="nav-item wbdv-margin">
                  <a className="nav-link bg-dark text-white" href="#">
                    {topic.title}
                  </a>
                </li>
            )
          }

          <li className="nav-item wbdv-margin">
            <a className="nav-link bg-dark text-white" href="#">
              <i className="fas fa-plus"></i>
            </a>
          </li>
        </ul>

        <br/>
        <div className="d-flex justify-content-center">
          Content intentionally left blank
        </div>
    </div>

const stpm = (state) => ({
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({})

export default connect(stpm, dtpm)(TopicPills)
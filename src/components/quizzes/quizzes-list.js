import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const QuizzesList = () => {
  const {courseId} = useParams()
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    quizService.findQuizzesForCourse(courseId)
    .then((quizzes) => {
      setQuizzes(quizzes)
    })
  }, [])
  return(
      <div className="container">
        <h2>Quizzes</h2>
        <div className="list-group -align-center">
          {
            quizzes.map((quiz) => {
              return(
                  <div className="list-group-item">
                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                      {quiz.title}
                    </Link>
                    <Link
                        className="btn btn-primary float-right"
                        to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                      Start
                    </Link>
                  </div>
              )
            })
          }
        </div>
      </div>
  );
}

export default QuizzesList;
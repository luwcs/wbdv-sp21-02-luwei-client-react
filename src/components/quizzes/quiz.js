import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import QuestionSerivce from "../../services/question-service"
import QuizService from "../../services/quiz-service"
import TrueFalseQuestion from "./questions/true-false-question"
import MultipleChoiceQuestion from "./questions/multiple-choice-question";

const Quiz = (title) => {
  const {courseId, quizId} = useParams()
  const [quiz, setQuiz] = useState({})
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    QuestionSerivce.findQuestionsForQuiz(quizId)
    .then((questions) => {
      setQuestions(questions)
    })
    QuizService.findQuiz(quizId)
    .then((quiz) => {
      setQuiz(quiz)
    })
  }, [])

  return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <h3>{quiz.title}</h3>
              </div>
              <div className="list-group">
                {
                  questions.map((question) => {
                    return(
                        <div>
                          <div className="row p-2 list-group-item">
                            <h5 className="col-1">{question.type}</h5>
                            {
                              question.type === "TRUE_FALSE" &&
                              <TrueFalseQuestion question={question}/>
                            }
                            {
                              question.type === "MULTIPLE_CHOICE" &&
                              <MultipleChoiceQuestion question={question}/>
                            }
                          </div>
                        </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <button
              type="button"
              className="btn btn-success float-left"
              onClick={() => QuizService.submitQuiz(quizId, questions)}>
            Submit
          </button>

          <Link
              to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>
            <button
                type="button"
                className="btn btn-primary float-left">
              Show Attempts
            </button>
          </Link>
        </div>
      </div>
  )
}

export default Quiz;
import React, {useState} from "react";

const MultipleChoiceQuestion = ({
  question
}) => {
  const getColorForEntry = (correctAnswer, currentChoice, entryValue) => {
    if (currentChoice == "" || !graded)
      return ""

    if (entryValue == correctAnswer)
      return "list-group-item-success"

    if (currentChoice != entryValue)
      return ""

    return "list-group-item-danger"
  }

  const getFlagForEntry = (correctAnswer, currentChoice, entryValue) => {
    if (currentChoice == "" || !graded)
      return ""

    if (entryValue == correctAnswer)
      return "fas fa-check"

    if (currentChoice != entryValue)
      return ""

    return "fas fa-times"
  }

  const getFlagForHead = (correctAnswer, currentChoice) => {
    if (currentChoice == "" || !graded)
      return ""

    if (currentChoice == correctAnswer)
      return <i className= "fas fa-check text-success float-right"></i>

    return <i className= "fas fa-times text-danger float-right"></i>
  }

  const [graded, setGraded] = useState(false)
  const [yourAnswer, setYourAnswer] = useState("")
  return(
      <div className="col">
        <div className="row mp-2">
          <h5 className="col">{question.question} {getFlagForHead(question.correct, yourAnswer)}</h5>
        </div>
        <div className="row list-group">
          {
            question.choices.map((choice) => {
              return(
                  <div className={`list-group-item
                            ${getColorForEntry(question.correct, yourAnswer, choice)}`}>
                    <label><input
                        onClick={() => {
                          setYourAnswer(choice)
                          setGraded(false)
                        }}
                        type="radio"
                        name={question._id}/> {choice}</label>
                    <i className={`float-right ${getFlagForEntry(question.correct, yourAnswer, choice)}`}></i>
                  </div>
              )
            })
          }
        </div>
        <br/>
        <div
            className="row btn btn-success p-2"
            onClick={() => {
              setGraded(true)
              question.answer = yourAnswer
            }}>
          Confirm
        </div>
      </div>
  )
}

export default MultipleChoiceQuestion
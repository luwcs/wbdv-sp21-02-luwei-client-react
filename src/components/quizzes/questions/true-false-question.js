import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {

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
        <div className="row mbt-2">
          <h5 className="col">{question.question} {getFlagForHead(question.correct, yourAnswer)}</h5>
        </div>
        <div className="list-group mbt-2">
          <div className={`row list-group-item ${getColorForEntry(question.correct, yourAnswer, "true")}`}>
            <label><input
                type="radio"
                name={question._id}
                onClick={() => {
                  setYourAnswer("true")
                  setGraded(false)
                }}/> True </label>
            <i className={`float-right ${getFlagForEntry(question.correct, yourAnswer, "true")}`}></i>
          </div>
          <div className={`row list-group-item ${getColorForEntry(question.correct, yourAnswer, "false")}`}>
            <label><input
                type="radio"
                name={question._id}
                onClick={() => {
                  setYourAnswer("false")
                  setGraded(false)
                }}/> False </label>
            <i className={`float-right ${getFlagForEntry(question.correct, yourAnswer, "false")}`}></i>
          </div>
        </div>
        <div
            className="row btn btn-success p-2"
            onClick={() => setGraded(true)}>
          Confirm
        </div>
      </div>
  )
}

export default TrueFalseQuestion
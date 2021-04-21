// const QUIZ_URL = "https://wbdv-sp21-02-luwei-node.herokuapp.com/api/quizzes";
const QUIZ_URL = "http://localhost:4000/api/quizzes";

const findQuestionsForQuiz = (qId) =>
    fetch(`${QUIZ_URL}/${qId}/questions`)
    .then(response => response.json())

export default {
  findQuestionsForQuiz
}
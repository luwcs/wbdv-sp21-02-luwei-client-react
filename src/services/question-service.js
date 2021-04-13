const QUIZ_URL = 'http://localhost:4000/api/quizzes';

const findQuestionsForQuiz = (qId) =>
    fetch(`${QUIZ_URL}/${qId}/questions`)
    .then(response => response.json())

export default {
  findQuestionsForQuiz
}
const QUIZZES_URL = "http://localhost:4000/api/quizzes";

const QuizAttemptService = {
  findAttemptsForQuiz : (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/attempts`)
    .then(res => res.json())
  }
}

export default QuizAttemptService;
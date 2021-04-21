const QUIZZES_URL = "http://wbdv-sp21-02-luwei-node.herokuapp.com/api/quizzes";

const QuizAttemptService = {
  findAttemptsForQuiz : (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/attempts`)
    .then(res => res.json())
  }
}

export default QuizAttemptService;
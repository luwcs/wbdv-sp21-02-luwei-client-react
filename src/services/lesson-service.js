const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/luwei/modules";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/luwei/lessons";

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
      method: "POST",
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
    .then(response => response.json())

export const findLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`)
    .then(response => response.json())

export const updateLesson = (lessonId, lesson) => {
  console.log(`updating ${JSON.stringify(lesson)} for ${lessonId}`)
  return fetch(`${LESSONS_URL}/${lessonId}`, {
    method: "PUT",
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
      method: "DELETE"
    })
    .then(response => response.json())

const api = {
  findLessonsForModule,
  createLessonForModule,
  findLesson,
  updateLesson,
  deleteLesson
}

export default api
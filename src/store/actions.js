export const ADD_QUESTION = 'ADD_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'

export const getQuestions = () => ({
    type: GET_QUESTIONS,
    
})

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: question
})
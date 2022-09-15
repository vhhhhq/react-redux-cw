export const QUIZ_START = "QUIZ_START"
export const QUIZ_RESET = "QUIZ_RESET"
export const QUIZ_NEXT = "QUIZ_NEXT"
export const QUIZ_PREV = 'QUIZ_PREV'
export const QUIZ_SUBMIT = 'QUIZ_SUBMIT'
export const QUIZ_TIMEOUT = 'QUIZ_TIMEOUT'


export const startQuiz = (time) => dispatch =>{
    dispatch({
        type: QUIZ_START,
        payload: time
    })
}

export const nextQuiz = ({answers}) => dispatch =>{
    dispatch({
        type: QUIZ_NEXT,
        payload:answers
    })
}

export const prevQuiz = () =>dispatch =>{
    dispatch({
        type: QUIZ_PREV,
        payload: null
    })
}

export const submitQuiz = ({answers,time}) => dispatch =>{
    dispatch({
        type: QUIZ_SUBMIT,
        payload:{
            answers: answers,
            time: time
        }
    })
}

export const resetQuiz = () => dispatch =>{
    dispatch({
        type: QUIZ_RESET,
        payload:null
    })
}

export const timeOut = () =>dispatch =>{
    dispatch({
        type: QUIZ_TIMEOUT,
        payload: null
    })
}
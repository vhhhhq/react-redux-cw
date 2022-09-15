import {QUIZ_START , QUIZ_RESET , QUIZ_NEXT,QUIZ_SUBMIT, QUIZ_PREV , QUIZ_TIMEOUT} from './actions';

const initialState = {
    step : 1,
    activeQuestion: 0,
    answers: [],
    time: 60
}
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      

        case QUIZ_START:
            return {
                ...state,step:2, 
                time: action.payload
            }
        case QUIZ_NEXT:
            return{
                ...state,
                answers: [...action.payload],
                activeQuestion: state?.activeQuestion+1
            }
        case QUIZ_SUBMIT:
            return{
                ...state,
                step:3,
                answers:[...action.payload?.answers], 
                time: action.payload?.time
            }
        case QUIZ_RESET:
            return{
                ...state,
                step:1,
                activeQuestion:0,
                answers:[], 
                time: 60
            }
        case QUIZ_PREV:
            return{
                ...state,
                activeQuestion:state?.activeQuestion-1
            }
        case QUIZ_TIMEOUT:
            return{
                ...state, 
                time: 0,step:3
            }
            
      default:
        return state;
    }
  }
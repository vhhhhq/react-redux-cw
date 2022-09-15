import React,{useState} from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { startQuiz } from "../../store/actions";


const Start = () => {
    const dispatch = useDispatch()
    const [minute,setMinute] = useState(1)
    const [second ,setSecond] = useState(0)
    const [time,setTime] = useState(60)
    const handleQuizStart = () =>{
      dispatch(startQuiz(time))
    }
    useEffect(() => {
      if (minute > 59) {
        setMinute(1)
      }
      if (second > 59) {
        setSecond(1)
      }
    }, [minute,second])
    useEffect(() => {
  
      console.log(minute)
      console.log(typeof(minute))
      if (minute !== NaN && second !== NaN) {
        setTime(minute * 60 + second)
      }
    }, [minute,second])
    return (
      <div >
        <div >
          <div >
            <h1>QUIZ</h1>
            <p>Time:{time}sec</p>
            
            <button onClick={handleQuizStart}>
              START
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Start;
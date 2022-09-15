import './App.scss';
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import End from "./components/End/End";
import Quiz from "./components/Quiz/Quiz";
import Start from "./components/Start/Start";
import quizData from "./data.json";


let interval;

const App = () => {
  const dispatch = useDispatch()
  const {step,answers} = useSelector(state => state?.quizReducer) 
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="App">
      {step === 1 && <Start/>}
      {step === 2 && <Quiz/>
      }
      {step === 3 && <End
      data={quizData.data}
      time={time}
      onAnswersCheck={() => setShowModal(true)}
      />}
     
    
    </div>
  );
};

export default App;
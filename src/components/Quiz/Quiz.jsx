import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuiz, prevQuiz, submitQuiz ,timeOut } from "../../store/actions";
import quizData from "../../data.json";

const Quiz = () => {
  const dispatch = useDispatch();
  const { activeQuestion, answers , time } = useSelector(
    (state) => state?.quizReducer
  );


  const [data, setData] = useState(quizData?.data[activeQuestion]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const [timer,setTimer] = useState(time)


  useEffect(() => {
    if(timer > 0 )
    {
      setTimeout(() => setTimer(timer - 1), 1000)
    }else{
      dispatch(timeOut());
    }
  }, [timer]);


  const radiosWrapper = useRef();
  useEffect(() => {
    setData(quizData?.data[activeQuestion]);
    if (answers[activeQuestion] != undefined) {
      setSelected(answers[activeQuestion].a);
    }
  }, [data, activeQuestion]);


  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };


  const handleNext = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    let ans = [...answers];
    ans[activeQuestion] = {
      q: data.question,
      a: selected,
    };
    dispatch(
      nextQuiz({
        answers: ans,
      })
    );
    setSelected("");
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  };


  const handleSubmit = () => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    dispatch(
      submitQuiz({
        answers: [
          ...answers,
          (answers[activeQuestion] = {
            q: data.question,
            a: selected,
          }),
        ],
        time: time - timer
      })
    );
  };
  return (
    <div>
      <section>
        <h3>
          Question {activeQuestion + 1}/{quizData?.data.length}
        </h3>
        <h5>{timer}</h5>
      </section>
      <section>
        <div>
        <p>{data?.question}</p>
        {error && <div>{error}</div>}
        </div>
        <div ref={radiosWrapper}>
          {data?.choices.map((choice, i) => (
            <label className={`${choice === selected ? `selected`: `text`}`} key={i}>
              <input
                type="radio"
                name="answer"
                value={choice}
                onChange={changeHandler}
                checked={choice === selected}
              />
              {choice}
            </label>
          ))}
        </div>
      </section>
        <section>

          {activeQuestion + 1 >= quizData?.data.length ? (
            <button onClick={ handleSubmit }>Submit</button>
          ) : (
            <button onClick={ handleNext }>Next</button>
          )}
          
        </section>
    </div>
  );
};

export default Quiz;
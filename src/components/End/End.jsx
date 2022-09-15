import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../../store/actions";
import quizData from "../../data.json";

const End = () => {
  const dispatch = useDispatch();
  const { answers,time } = useSelector((state) => state.quizReducer);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [modal, setModal] = useState(false);


  useEffect(() => {
    let correct = 0;
    answers.forEach((result, index) => {
      if (result.a === quizData?.data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);
  const handleReset = () => {
    dispatch(resetQuiz());
  };


  return (
    <div>
      <h3>Your results</h3>
      <p>
        {correctAnswers} of {quizData?.data.length}
      </p>
      <p>
        <strong>
          {Math.floor((correctAnswers / quizData?.data.length) * 100)}%
        </strong>
      </p>
      <p>
        <strong>Your time:</strong> {time}sec
      </p>
      <section>
        <button
          onClick={handleReset}
        >
          Restart
        </button>
      </section>
      <div show={modal}>
        <section>
          <header>
            <p className="">Your Answers</p>
            <p  style={{
              cursor: "pointer"
            }} onClick={() => setModal(false)}></p>
          </header>
          <section>
            <ul>
              {answers.map((result, i) => (
                <li key={i} >
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p
                    className={
                      result.a === quizData?.data[i].answer
                        ? "bg-success"
                        : "bg-danger"
                    }
                  >
                    Your answer: {result.a}
                  </p>
                  {result.a !== quizData?.data[i].answer && (
                    <p>
                      Correct answer: {quizData?.data[i].answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default End;
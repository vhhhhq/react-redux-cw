import React from "react";
import './Questions.scss'


export const QuestionItem = ({question, handleChange, isMultiple}) => {
  const answerType = isMultiple ? 'checkbox' : 'radio';

  return (
    <div className="question-wrapper" key={question.id}>
      <div className="question-title">{question.question}</div>
      <div className="question-options">
        {question.answers.map(item => (
          <div key={item.answer} className="question-option">
            <input
              type={answerType}
              name={question.question}
              id={item.answer}
              value={item.correct}
              onChange={handleChange}
            />
            <label htmlFor={item.answer}>
              {item.answer}
            </label>
          </div>
        ) )}
      </div>
    </div>
  );
};
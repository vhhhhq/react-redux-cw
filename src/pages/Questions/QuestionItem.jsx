import React from 'react'

const QuestionItem = (question) => {
  return (
    <div key={question.id}>
                    <div className='question-title'>
                        <h2>{question.question}</h2>
                    </div>

                    <div className='question-options'>
                        <div className='question-option'>
                            <input type="radio" id={question.id} name={question.id} value={1} />
                            <label htmlFor={question.answers[0].answer}>{question.answers[0].answer}</label>
                        </div>
                        <div className='question-option'>
                            <input type="radio" id={question.id} name={question.id} value={2} />
                            <label htmlFor={question.answers[1].answer}>{question.answers[1].answer}</label>
                        </div>
                        <div className='question-option'>
                            <input type="radio" id={question.id} name={question.id} value={3} />
                            <label htmlFor={question.answers[2].answer}>{question.answers[2].answer}</label>
                        </div>
                        <div className='question-option'>
                            <input type="radio" id={question.id} name={question.id} value={4} />
                            <label htmlFor={question.answers[3].answer}>{question.answers[3].answer}</label>
                        </div>
                    </div>
                </div>
  )
}

export default QuestionItem
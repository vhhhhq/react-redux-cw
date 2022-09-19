import React from 'react'
import {useSelector} from 'react-redux'
import './Form.scss'

export const FormList = () => {
  const questions = useSelector(store => store.questions)
  console.log('questions', questions)
  return (
    <div className='form-list-quiz'>
      <h1>Questions</h1>
      <div>{questions.map(q => (
        <div key={q.id}>
          <div>{q.question}</div>
          <div>
            {q.answers.map(a => (
              <div 
                key={a.name} 
                style={a.correct ? {color: 'green'} : {}}
              >
                {a.name}
              </div>
            ))}
          </div>
        </div>
      ))}</div>
    </div>
  )
}

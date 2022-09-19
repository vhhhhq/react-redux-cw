import React, {useState} from 'react'
import { Form } from './Form.jsx';
import { FormList } from './FormList.jsx';
import './Form.scss'

export const FormQuiz = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div>
      {showForm ? 
        <Form close={() => setShowForm(false)} /> 
        :
        <button onClick={() => setShowForm(true)}>Add question</button>
      }
      
      <FormList />
    </div>
  )
}

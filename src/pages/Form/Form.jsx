import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addQuestion} from '../../store/actions'

export const Form = ({close}) => {
  const initStateAnswers = [
    {
      name: '',
      correct: false
    },
    {
      name: '',
      correct: false
    },
    {
      name: '',
      correct: false
    },
  ]
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState(initStateAnswers)

  const handleAnswersInput = (e, index) => {
    const { value } = e.target
    const newAnswers = [...answers]
    newAnswers[index].name = value

    setAnswers(newAnswers)
  }

  const handleAnswersCheckbox = (e, index) => {
    const {checked} = e.target
    const newAnswers = [...answers]
    newAnswers[index].correct = checked
    
    setAnswers(newAnswers)
  }
  
  const handleSave = () => {
    const payload = {
      id: Date.now(),
      question,
      answers
    }

    dispatch(addQuestion(payload))
    close()
    // setAnswers(initStateAnswers)
    // setQuestion('')
  }

  return (
    <div>
      <h1>Create Question</h1>

        <div>
          <label htmlFor="question">Question: </label>
          <input 
            id="question" 
            type="text" 
            valuepi={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              <label htmlFor={index}>Answer {index + 1}: </label>
              <input 
                id={index} 
                type="text" 
                value={answer.name}
                onChange={(e) => handleAnswersInput(e, index)}
              />
              <input 
                type="checkbox" 
                name="answers" 
                onChange={(e) => handleAnswersCheckbox(e, index)}
              />
            </div>
          ))}
        </div>
        <button onClick={handleSave}>Save</button>
        
    </div>
  )
}


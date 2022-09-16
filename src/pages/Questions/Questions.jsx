import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Form, Input, Col, Row, Statistic } from 'antd';
import 'antd/dist/antd.css';
import './Questions.scss'
import { QuestionItem } from './QuestionItem';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60;

const Questions = () => {
    const questions = useSelector((store) => store.questions);
    const [values, setValues] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [user, setUser] = useState(null)
    const [timeOut, setTimeOut] = useState(null)
    const [input, setInput] = useState(null)
  
    const onTimerFinish = () => {
      console.log('finished!');
      showModal()
      setTimeOut(true)
    };
  
    const handleInput = () => {
      setInput(true)
      console.log('input', input);
    }
  
    const onFinish = (values) => {
      console.log('Success:', values);
      setUser(values?.username)
      console.log('user', user);
      setInput(false)
      console.log('false input', input);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    const showModal = () => {
      calculateResults()
      setIsModalOpen(true)
      setTimeOut(false)
      setInput(null)
      setUser(null)
  
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const calculateResults = () => {
      let correct = 0;
      Object.values(values).forEach((value) => {
        if (value === 'true') {
          console.log(value);
          correct++;
        }
      });
      setCorrectAnswers(correct);
      console.log(correct);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Sending form with values:', values);
      calculateResults();
    };
  
    const title = timeOut ? 'Ваше время вышло' : 'Вы завершили тест!'
  
    return (
      <div className='questions-container'>
        <div className='questions-wrapper'>
          {!user &&

          <div className='form-question'>
            <div className="form-antd-quiz">
              <Form 
                name='basic' labelCol={{ span: 8, }} wrapperCol={{ span: 50, }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
              >
                <Form.Item
                  label="Your name"
                  name='username'
  
                  onChange={handleInput}
                  rules={[
                    {
                      required: true,
                      message: 'Enter your name to take the test!',
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter name to continue" />
                </Form.Item>
                {input &&
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 8,
                    }}
                  >
                    <Button type='primary' htmlType='submit'>
                      Start
                    </Button>
                  </Form.Item>
                }
              </Form>
            </div>
          </div>
          }
  
          {user &&
            <div >
              <div className="quiz-time">
                <div>
                <h1>QUIZ</h1>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Countdown value={deadline} onFinish={onTimerFinish} />
                    </Col>
                  </Row>
                </div>
                <h3>Please take the test by answering the questions</h3>
              </div>
  
              <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                  {questions.map((question) => {
                    return (
                        <QuestionItem 
                          question={question} 
                          handleChange={handleChange}
                          isMultiple={question.multiple}
                        />
                      )
                    }
                  )}
  
                  <button type='submit' onClick={showModal}>
                    Finish
                  </button>
                </form>
              </div>
            </div>
          }
          <Modal
            title={title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div>
              <h2>
                {user} Your result: <br/>{correctAnswers} из {questions.length}
              </h2>
              <h2>
                Test success: <br/>
                {Math.floor((correctAnswers / questions.length) * 100)}%
              </h2>
            </div>
          </Modal>
          
        </div>
      </div>
    );
  };
  
  export default Questions;
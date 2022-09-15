import React, { useState } from "react";
import { useSelector } from "react-redux";
import './Questions.scss'
import { Button, Modal, Form, Input, Col, Row, Statistic } from "antd";
import "antd/dist/antd.css";
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 30; // Moment is also OK

const Questions = () => {
  const questions = useSelector((store) => store.questions);
  const [values, setValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [user, setUser] = useState(null)
  const [timeOut, setTimeOut] = useState(null)

  const onTimerFinish = () => {
    console.log('finished!');
    showModal()
    setTimeOut(true)
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setUser(values?.username)
    console.log('user', user);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    calculateResults()
    setIsModalOpen(true);
    setTimeOut(false)
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
      if (value === "true") {
        console.log(value);
        correct++;
      }
    });
    setCorrectAnswers(correct);
    console.log(correct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending form with values:", values);
    calculateResults();
  };

  console.log("questions", questions);
  console.log("question", questions[0].answers);

  const title = timeOut ? 'Ваше время вышло' : 'Вы завершили тест!'
  return (
    <div>
      <div className="form-antd-quiz">
        <Form
          name="basic"
          
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Your name"
            name="username"
            rules={[
              {
                required: true,
                message: "Your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          >
            <Button classname="button" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="quiz-time">
        <h1>QUIZ</h1>
        <h3>Please take the test by answering the questions</h3>
        <Row gutter={16}>
      <Col span={12}>
        <Countdown  value={deadline} onFinish={onTimerFinish} />
      </Col>
    </Row>
      </div>
      <div className="form-quiz">
      <form onSubmit={handleSubmit}>
        {questions.map((question) => {
          return question.multiple ?
            <div key={question.id}>
              <div className="question-title">
                <h2>{question.question}</h2>
              </div>
              <div className="question-options">
                <div className="question-option">
                  <input
                    type="checkbox"
                    id={question.id}
                    name={question.id}
                    value={question.answers[0].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[0].answer}>
                    {question.answers[0].answer}
                  </label>
                </div>
                <div className="question-option">
                  <input
                    type="checkbox"
                    id={question.id}
                    name={question.id}
                    value={question.answers[1].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[1].answer}>
                    {question.answers[1].answer}
                  </label>
                </div>
                <div className="question-option">
                  <input
                    type="checkbox"
                    id={question.id}
                    name={question.id}
                    value={question.answers[2].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[2].answer}>
                    {question.answers[2].answer}
                  </label>
                </div>
                <div className="question-option">
                  <input
                    type="checkbox"
                    id={question.id}
                    name={question.id}
                    value={question.answers[3].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[3].answer}>
                    {question.answers[3].answer}
                  </label>
                </div>
              </div>
            </div>
            :
            <div key={question.id}>
              <div className="question-title">
                <h2>{question.question}</h2>
              </div>
              <div className="question-options">
                <div className="question-option">
                  <input
                    type="radio"
                    id={question.id}
                    name={question.id}
                    value={question.answers[0].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[0].answer}>
                    {question.answers[0].answer}
                  </label>
                </div>
                <div className="question-option">
                  <input
                    type="radio"
                    id={question.id}
                    name={question.id}
                    value={question.answers[1].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[1].answer}>
                    {question.answers[1].answer}
                  </label>
                </div>
                <div className="question-option">
                  <input
                    type="radio"
                    id={question.id}
                    name={question.id}
                    value={question.answers[2].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[2].answer}>
                    {question.answers[2].answer}
                  </label>
                </div>
                <div className="question-option">
                  <input
                    type="radio"
                    id={question.id}
                    name={question.id}
                    value={question.answers[3].correct}
                    onChange={handleChange}
                  />
                  <label htmlFor={question.answers[3].answer}>
                    {question.answers[3].answer}
                  </label>
                </div>
              </div>
            </div>
        }

        )}

        <div className="btn">
            <button type="submit" onClick={showModal}>
            RESULT
            </button>
        </div>
      </form>
      </div>
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
          Test success: <br/> {Math.floor((correctAnswers / questions.length) * 100)}%
          </h2>
        </div>
      </Modal>
    </div>
  );
};

export default Questions;
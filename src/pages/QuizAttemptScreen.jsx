import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../Quiz_Data/questions';
import './quiz_attemp_screen.css';

const QuizAttemptScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [remainingTime, setRemainingTime] = useState(60);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    // Timer countdown logic
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);
    
    // Auto-submit quiz when timer reaches zero
    if (remainingTime === 0) {
      handleNextQuestion();
    }

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, [remainingTime]);

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitQuiz = () => {
    // Quiz submission logic
    setSelectedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

    // Quiz Navigation logic
    navigate("/result",{ state: { selectedAnswers: [...selectedAnswers, selectedAnswer] } });
  };
  const currentQuiz = quizData[currentQuestion];
  const isLastQuestion = currentQuestion === quizData.length - 1;

  const handleNextQuestion = () => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedAnswer(null);
  };

  const isOptionSelected = (option) => {
    return selectedAnswer === option;
  };

  return (
    <div className="quiz-attempt-screen">
    <div className="header">
      <div className="question-info">
        <span className="question-number"> {currentQuestion + 1}</span>
        <span className="question-count">/{quizData.length}</span>
      </div>
      <div className="remaining-time">{remainingTime} sec</div>
    </div>
    <h2 className="question">{currentQuiz.question}</h2>
    <div className="question_body">
    <div className="options">
      {currentQuiz.options.map((option, index) => (
        
        <div key={index} className={`option ${isOptionSelected(option) ? "selected" : ""}`}>
          <span className="option-number">{String.fromCharCode(65 + index)}</span>
          <label className="option-label">
           <div className="option_ans"> {option}</div>
            <input
            className='radio_btn'
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => selectAnswer(option)}
            />
           <span className="checkmark"></span>
          </label>
        </div>
      ))}
    </div>
    <div className="button-container">
      {isLastQuestion ? (
        <button className="submit-button" onClick={submitQuiz}>Submit Quiz</button>
      ) : (
        <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
    </div>
  </div>
  );
};

export default QuizAttemptScreen;

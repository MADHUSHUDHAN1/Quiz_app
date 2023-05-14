import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import quizData from '../Quiz_Data/questions';
import './quiz_result_screen.css';
import img from '../animation/wim-img.jpg';
import { FcRating } from "react-icons/fc";
const QuizResultScreen = () => {
  const location = useLocation();
  const { selectedAnswers } = location.state;


  useEffect(() => {
    // Calculate the score when the component mounts
    const score = calculateScore(selectedAnswers);
    console.log('Score:', score);
  }, [selectedAnswers]);

  const calculateScore = (selectedAnswers) => {
    // Assuming quizData contains the correct answers
    let score = 0;
    for (let i = 0; i < selectedAnswers.length; i++) {
      const selectedAnswer = selectedAnswers[i];
      const correctAnswer = quizData[i].correctAnswer;
      if (selectedAnswer === correctAnswer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className="container">
      <div className="image">
        <img src={img}/>
      </div>
      <p className="score">Score: {calculateScore(selectedAnswers)}</p>
      <div className="star">
        <FcRating className='icon_start'/><p>60</p>
      </div>
      <p className="karma-point">Karma Point Earned!</p>
      
      <div className="desc">
     <p className="karma-q">What are Karma Points?</p>
      <p className="description">Karma points are awarded for various actions like attempting quizzes and watching videos, allowing you to move up the leaderboards and unlock new features.</p>
     </div>
      <div className="karma">
     
      <div className="button-container">
      <button className="button">Check Result</button>
      </div>
       
      </div>
      
    </div>
  );
};

export default QuizResultScreen;

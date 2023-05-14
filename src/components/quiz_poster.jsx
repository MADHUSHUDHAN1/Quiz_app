import React from 'react';
import './quiz_poster.css';

const QuizPoster = ({ imageUrl }) => {
  return (
    <div className="quiz-poster">
      <img src={imageUrl} alt="Quiz Poster" />
    </div>
  );
};

export default QuizPoster;

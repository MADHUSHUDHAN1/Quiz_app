import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizAttemptScreen from './QuizAttemptScreen';
import QuizRulesPopup from './QuizRulesPopup';
import QuizPoster from '../components/quiz_poster';
import {BsChatDots} from 'react-icons/bs';
import QuizFooter from '../components/quiz_Desc/Quiz_Desc';
import QuizFeature from '../components/Quiz_feature/Quiz_featur';
import './quiz_detail_screen.css';
  
const QuizDetailScreen = () => {
    
  const [showPopup, setShowPopup] = useState(false);
  let navigate = useNavigate();
  const quizPosterUrl ='https://firebasestorage.googleapis.com/v0/b/shishir-2k23.appspot.com/o/quiz_app_poster.jpg?alt=media&token=3952de22-bbe4-465e-bec2-76af378a76a3';

    const quizName = 'Quiz Name';
    const quizDescription = 'This is a quiz descriptioThis is a quiz descriptioThis is a quiz descriptioThis is a quiz descriptioThis is a quiz description.';
    const passingMark = 70; // Assuming passing mark is 70%
  // const startQuiz = () => {
  //   // Navigate to the Quiz Attempt Screen when the quiz is started
  //   //history.push(QuizAttemptScreen);
    
  // };
  const handleStartQuiz = () => {
    // Start the quiz logic here
    console.log('Quiz started!');
    navigate("/quiz");
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className={`quiz-detail-screen ${showPopup ? 'popup-open' : ''}`}>
      {/* <h1>Quiz Details</h1> */}
       {/* ... Other content ... */}
       <QuizPoster imageUrl={quizPosterUrl} alt="Quiz Poster" />
       <QuizFooter/>
       <QuizFeature/>
       <div className="btn_container">
       <button className='takeQuiz' onClick={handleOpenPopup}>Take Quiz</button>
       </div>
      {showPopup && (
        <>
        <div className="overlay" onClick={handleClosePopup}></div>
        <QuizRulesPopup onStartQuiz={handleStartQuiz} />
        </>
        )}
    </div>
  );
};

export default QuizDetailScreen;

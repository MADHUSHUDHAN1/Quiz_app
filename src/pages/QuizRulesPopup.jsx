import React from 'react';
import "./quiz_popup.css";
import { FcClock,FcInspection } from "react-icons/fc";
import { RiMedalLine } from "react-icons/ri";
import {BsFillExclamationCircleFill} from "react-icons/bs";

const QuizRulesPopup = ({ onStartQuiz }) => {
  const handleStartQuiz = () => {
    onStartQuiz();
  };

  return (
    <div className="quiz-rules-popup">
     
      
      <div className="quiz_list">
      <div className='quiz_head'>Quiz Rules</div>
        <div className="q_item">
          <FcClock className='icon_size'/>
           <div className="icon_info"> 
              <div className="quiz_time">10 Mins</div> 
              Keep in mind that it's a time bound quiz.
           </div>
         </div>

        <div className="q_item">
           <FcInspection className='icon_size'/>
           <div className="icon_info"> 
           <div className="quiz_time">5 Questions</div>
             We believe that you will ace it!.
           </div>
        </div>

        <div className="q_item">
            <RiMedalLine className='icon_size'/>
            <div className="icon_info"> 
            <div className="quiz_time">50% Passing Criteria</div>
            All the best! See you on the other side.
           </div>
        </div>

        <div className="alert">
        <BsFillExclamationCircleFill className='excla'/>
        This quiz can only be attempted once daily.</div>
      
    </div>
    <div className="btn_container">
      <button className='takeQuiz' onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    </div>
  );
};

export default QuizRulesPopup;

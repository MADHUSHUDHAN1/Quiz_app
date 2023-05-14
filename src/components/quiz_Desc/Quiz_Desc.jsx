import React from 'react';
import './quiz_desc.css';
import { FaChat, FaSave, FaUser } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import {MdGroups} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {GiAllForOne} from 'react-icons/gi';
const QuizFooter = () => {
  return (
    <div className='quiz'>
        <div className='quiz_heading'> The Daily MS Excel Quiz</div>
     <div className="quiz_main">
        <div className="quiz-footer-left">
       
             <div className="icon_text">
              <BsChatDots className='icon_size' />
               <div className="icon_info"> Leave a comment</div>
             </div>

            <div className="icon_text">
             <MdGroups className='icon_size'/>
               <div className="icon_info">
                 People enrolled
               </div>
             </div>
          </div>

<div className="quiz-footer-left">
      <div className="icon_text">
         <FaSave className='icon_size'/>
         <div className="icon_info">
          Save quiz
         </div>
       </div>

       
    </div>
  <div className="quiz-footer-left">
     <div className="icon_text">
       <GiAllForOne className='icon_size'/>
        <div className="icon_info">
         Challenge a Friend
        </div>
      </div>

      <div className="icon_text">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/><br></br>
          3 Ratings (5.0)
        </div>
     </div>


  </div>
  <div className="quiz_description">
     This Microsoft Excel Proficiency Test is designed to evaluate an individual's
     knowledge and skills in using Microsoft Excel. It covers a wide range of topics, including da...
     <div className="read_more">Read More</div>
  </div>
        
      
    </div>
  );
};

export default QuizFooter;

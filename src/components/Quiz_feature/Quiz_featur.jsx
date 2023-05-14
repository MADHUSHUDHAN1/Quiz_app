import React from 'react';
import './quiz_feature.css';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {CiCircleQuestion} from 'react-icons/ci';
import {BiTimeFive} from 'react-icons/bi';
import {HiOutlineDuplicate} from 'react-icons/hi';
const QuizFeature = () => {
  return (
    <div className="quiz-feature">
      <div className='quiz_head'>This Quiz Includes</div>
      <div className="quiz_list">
        <div className="q_item">
          <HiOutlineDocumentText className='icon_size'/>
           <div className="icon_info"> 
              50% Passing Percentage
           </div>
         </div>

        <div className="q_item">
           <CiCircleQuestion className='icon_size'/>
           <div className="icon_info"> 
              % Questions
           </div>
        </div>

        <div className="q_item">
            <BiTimeFive className='icon_size'/>
            <div className="icon_info"> 
              10 Minutes
           </div>
        </div>

        <div className="q_item">
            <HiOutlineDuplicate className='icon_size'/>
            <div className="icon_info"> 
              1 Attemp Daily
           </div>
        </div>
      </div>
    </div>
  );
};

export default QuizFeature;

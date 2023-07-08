import React from 'react';
import DotImageScroller from '../components/ImageScroller';
import { BiSolidVideo } from 'react-icons/bi';
import { AiFillAudio } from 'react-icons/ai';
import { BsFillChatLeftFill } from 'react-icons/bs';


const Therapist = () => {
  return (
<div className='therapy'>
    <div className="heading">
    <h1>Choose Help! Not Suffering</h1>
    </div>

    <div className="therapy-container">
      <div className="image-card-scroller">
        <DotImageScroller></DotImageScroller>
        {/* Add more image cards here */}
        <button className='button'>Schedule Appointment</button>
      </div>
      <div className="content-div">
        <div className='content'>
        <h3>Counselling Therapy Sessions With Licensed & Verified Experts</h3>
        <p>Highly qualified team of some of the best names in psychology who deliver improved well-being to you. Carefully vetted through a rigorous selection process. Trained and experienced in all psychotherapy techniques.</p>
        <div className="icons">
            <BiSolidVideo className='icon'></BiSolidVideo>
            <AiFillAudio className='icon'></AiFillAudio>
            <BsFillChatLeftFill className='icon'></BsFillChatLeftFill>
        </div>
        </div>
        
      </div>
    </div>
 </div>
  );
};

export default Therapist;
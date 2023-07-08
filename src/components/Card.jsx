import React from 'react';


const Card = (props) => {
  return (
    <div className="card">
      <img src= {props.img} alt="Card Image" className="card-image" />
      <button className="card-button">{props.btnText}</button>
    </div>
  );
};

export default Card;
import React from "react";
import './Child.css'


const Child = (props) => {
  return (
    <>
      <div className="card">
        <div className="">
        <img src={props.image} alt="card-image" className="card-img"/>
        </div>
        <div className="">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-description">{props.description}</p>
        <button className="card-btn">Clike me</button>
        </div>
      </div>
    </>
  );
};

export default Child;

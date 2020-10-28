import React, { useState } from "react";

function Card({ props }) {
  return (
    <div className="home-card">
      <img
        className="home-card-image"
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80"
        alt="img"
        style={{ width: "100%" }}
      />
      <div className="home-card-container">
        <h4>
          <b>{props.title}</b>
        </h4>
      </div>
      <div className="home-card-info">
        <div>
          <b>Number of Groups: </b>7
        </div>
        <div>explore</div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import QuenstinCreate from "./QuenstinCreate";

export default function Card() {
  return (
    <div className="card">
      <div className="img">
          <img src="logo192.png"></img>
      </div>
      <div className="info">
        <span>John Doe</span>
        <p>Web Dev</p>
      </div>
      
      <a href="#">Button</a>
    </div>
  );
}

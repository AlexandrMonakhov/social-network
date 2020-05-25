import React, { Component } from "react";
import "./Friend.css";

const Friend = (props) => {
  console.log(props);

  return (
    <div className="firends-block">
      <img
        src={require("../../../img/avatar.jpeg")}
        alt="аватарка"
        className="friends__avatar"
      />
      <span className="firends__name">{props.friends}</span>
      <div className="dots"></div>
    </div>
  );
};

export default Friend;

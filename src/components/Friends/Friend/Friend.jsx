import React, { Component } from "react";
import "./Friend.css";

const Friend = ({ friends }) => {
  return (
    <div className="firends-block">
      <img
        src={require("../../../img/avatar.jpeg")}
        alt="аватарка"
        className="friends__avatar"
      />
      <span className="firends__name">{friends.name}</span>
      <div className="dots"></div>
    </div>
  );
};

export default Friend;

import React, { Component } from "react";
import Friend from "./Friend/Friend";
import "./Friends.css";

const Friends = (props) => {
  return (
    <>
      <h1>Мои друзья</h1>
      <div className="friends-wrapper">
        {props.friends.map((friend, i) => (
          <Friend friends={friend.friends[i].name} />
        ))}
      </div>
    </>
  );
};

export default Friends;

import React, { Component } from 'react';
import './DialogsMessage.css';

const DialogsMessage = (props) => {

  return (
    <li className="dialogs-message-wrapper">
      <div className="dialogs-message-user">
        <img src={require('../../../img/avatar.jpeg')} alt={props.name} className="dialogs-message__avatar" />
        <span className="dialogs-message__name">{props.name}</span>
      </div>
      <p className="dialogs-message__text">{props.message}</p>
    </li>
  );
};

export default DialogsMessage;
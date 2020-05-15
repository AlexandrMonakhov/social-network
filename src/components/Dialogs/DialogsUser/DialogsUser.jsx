import React, { Component } from 'react';
import './DialogsUser.css';

const DialogsUser = (props) => {

    return (
      <li className="dialogs-user-wrapper">
        <img src={require('../../../img/avatar.jpeg')} alt={props.name} className="dialogs-user__avatar" />
        <span className="dialogs-user__name">{props.name}</span>
      </li>
    );

};

export default DialogsUser;
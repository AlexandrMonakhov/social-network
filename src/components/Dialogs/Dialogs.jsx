import React, { Component } from "react";
import "./Dialogs.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let dialogsUser = props.users.map((user, key) => (
    <DialogsUser key={key} name={user.name} id={user.id} />
  ));
  let dialogsMessage = props.messages.map((message, key) => (
    <DialogsMessage
      key={key}
      name={message.name}
      id={message.id}
      message={message.message}
    />
  ));

  return (
    <>
      <h1 className="dialogs__title">Сообщения</h1>
      <div className="dialogs-wrapper">
        <ul className="dialogs-user">{dialogsUser}</ul>
        <ul className="dialogs-messages">{dialogsMessage}</ul>
      </div>
    </>
  );
};

export default Dialogs;

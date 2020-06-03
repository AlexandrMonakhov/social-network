import React, { Component } from "react";
import "./DialogsController.css";

const DialogsController = (props) => {
  let dialogsArea = React.createRef();

  const newMessages = () => {
    let newMessage = dialogsArea.current.value;
    props.addMessages(newMessage);
  };
  return (
    <div className="dialogs-controller">
      <textarea
        placeholder="Ваше сообщение..."
        className="dialogs-text"
        ref={dialogsArea}
      ></textarea>
      <button className="dialogs-button" onClick={newMessages}>
        Отправить
      </button>
    </div>
  );
};

export default DialogsController;

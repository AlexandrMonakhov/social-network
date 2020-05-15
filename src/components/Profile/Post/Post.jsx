import React, { Component } from 'react';
import './Post.css';

const Post = (props) => {
  return(

    <div className="post">
      <div className="post__user">
        <img src={require('../../../img/avatar.jpeg')} alt="аватар пользователя" className="post__avatar" />
        <p className="post__item">{props.message}</p>
      </div>
      <div className="post-controls">
        <div className="post-controls__like">
          <span>{props.like}</span>
          <button className="like__btn">
            <span role="img" aria-label="like">👍</span>
          </button>
        </div>
        <div className="post-controls__dislike">
          <span>{props.dislike}</span>
          <button className="dislike__btn">
            <span role="img" aria-label="dislike">👎</span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Post;
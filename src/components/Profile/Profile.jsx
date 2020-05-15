import React, { Component } from 'react';
import Post from './Post/Post';
import Author from './Author/Author';
import './Profile.css';

const Profile = () => {

  let postData = [
    { id: 1, message: 'Я учу реакт!', like: 100, dislike: 10},
    { id: 2, message: 'Я тоже, как успехи?', like: 75, dislike: 11},
    { id: 3, message: 'А я лентяй!', like: 5, dislike: 70},
  ];

  return(
    <>
      <Author name="Алексей К." birthday="21.05.1991" 
        city="Москва" education="Техническое" site="https://www.example.com/"/>

      <div className="new-post">
        <h2>Мой пост:</h2>
        <div className="post-block">
          <textarea placeholder="Ваш пост..." className="my-post"></textarea>
          <button className="new-post__button">Отправить</button>
        </div>
      </div>

      <div className="posts">
        <Post message="Я учу реакт!" like="100" dislike="10" />
        <Post message="Я тоже, как успехи?" like="75" dislike="11" />
        <Post message="А я нативщик!" like="20" dislike="25" />
      </div>
    </>
  );
};

export default Profile;
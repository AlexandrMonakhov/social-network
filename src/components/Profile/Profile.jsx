import React, { Component } from "react";
import Post from "./Post/Post";
import Author from "./Author/Author";
import "./Profile.css";

const Profile = (props) => {
  return (
    <>
      <Author
        name="Алексей К."
        birthday="21.05.1991"
        city="Москва"
        education="Техническое"
        site="https://www.example.com/"
      />

      <div className="new-post">
        <h2>Мой пост:</h2>
        <div className="post-block">
          <textarea placeholder="Ваш пост..." className="my-post"></textarea>
          <button className="new-post__button">Отправить</button>
        </div>
      </div>

      <div className="posts">
        {props.posts.map((post) => (
          <Post
            message={post.message}
            like={post.like}
            dislike={post.dislike}
            id={post.id}
          />
        ))}

        {/* <Post message="Я учу реакт!" like="100" dislike="10" />
        <Post message="Я тоже, как успехи?" like="75" dislike="11" />
        <Post message="А я нативщик!" like="20" dislike="25" /> */}
      </div>
    </>
  );
};

export default Profile;

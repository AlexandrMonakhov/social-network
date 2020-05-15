import React, { Component } from 'react';
import './Author.css';

const Author = ( {name, birthday, city, education, site} ) => {

  return (
    <div className="content-author">
      <img src={require('../../../img/avatar.jpeg')} alt="avatar" className="content__avatar" />
      <div className="content-author__about">
        <ul>
          <li><span className="author__name">{ name }</span></li>
          <li>Дата рождения: { birthday }</li>
          <li>Город: { city }</li>
          <li>Образование: { education }</li>
          <li>Сайт: { site }</li>
        </ul>
      </div>
    </div>
  );

};

export default Author;
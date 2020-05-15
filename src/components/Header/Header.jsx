import React, { Component } from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={require('../../img/logo.png')} alt="logo" />
    </header>
  );
};

export default Header;
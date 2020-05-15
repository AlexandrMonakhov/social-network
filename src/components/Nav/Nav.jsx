import React, { Component } from "react";
import "./Nav.css";
import NavMenuLink from "./NavMenuLink/NavMenuLink";

const Nav = ({ paths }) => {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        {paths.map((nav, key) => (
          <NavMenuLink key={key} path={nav.path} menu={nav.menu} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

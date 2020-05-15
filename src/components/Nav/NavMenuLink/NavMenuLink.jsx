import React, { Component } from "react";
import "./NavMenuLink.css";
import { NavLink } from "react-router-dom";

const NavMenuLink = (props) => {
  return (
    <NavLink to={props.path} className="nav-menu-link">
      <li className="nav-menu-link__item">{props.menu}</li>
    </NavLink>
  );
};

export default NavMenuLink;

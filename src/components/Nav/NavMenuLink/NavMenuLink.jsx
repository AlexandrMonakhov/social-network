import React, { Component } from "react";
import "./NavMenuLink.css";
import { NavLink } from "react-router-dom";

const NavMenuLink = ({ path, menu }) => {
  return (
    <NavLink to={path} className="nav-menu-link">
      <li className="nav-menu-link__item">{menu}</li>
    </NavLink>
  );
};

export default NavMenuLink;

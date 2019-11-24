import React from "react";
import { NavLink } from "react-router-dom";
import { subjects } from "utils/subjects";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">
      Forum
    </NavLink>
    <ul className="navbar-nav ml-auto flex-row">
      {subjects.map(({ name, id }) => (
        <NavLink
          key={id}
          to={`/${id}`}
          className="ml-3"
          activeClassName="active"
        >
          <span className="nav-link">{id.toUpperCase()}</span>
        </NavLink>
      ))}
    </ul>
  </nav>
);

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="title">
      <nav className="nav-container">
        <ul>
          <li>
            <NavLink to="/Bookclubs" className="link">
              | Bookclubs |
            </NavLink>
          </li>
          <li>
            <NavLink to="/Books" className="link">
              Books |
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="link">
              Login |
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

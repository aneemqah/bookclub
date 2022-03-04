import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <input
            type="text"
            value=""
            id="username"
            placeholder="username"
            name="username"
          />
          <input
            type="text"
            value=""
            id="password"
            placeholder="password"
            name="password"
          />
          <Link to="/Bookclubs" className="btn btn-success">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

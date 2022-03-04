import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Bookclubsearch(props) {
  return (
    <div className="Bookclubsearch">
      <h2>Bookclubs</h2>
      <ul>
        {props.bookClubs.map((bc) => (
          <li className="navlink" key={bc.id}>
            <Link to={"/Bookclub/" + bc.id}>{bc.name}</Link>
          </li>
        ))}
      </ul>
      {/* Create a new button so that user can add a new bookclub. This should be a form component. Add route to app.js */}
      <div>
        <Link key="create" to="/CreateBookclub" className="btn btn-success">
          Create a Bookclub
        </Link>
      </div>
    </div>
  );
}

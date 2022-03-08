import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ModifyBookclub from "./ModifyBookclub";

export default function Bookclubsearch(props) {
  const handleDelete = (bc_id) => {
    props.deleteBookclub(bc_id);
  };

  return (
    <div className="Bookclubsearch">
      <h2>Bookclubs</h2>

      <div className="row-container">
        <ul>
          {props.bookClubs.map((bc) => (
            <li className="navlink" key={bc.id}>
              <div className="bcname">
                <Link to={"/Bookclub/" + bc.id}>{bc.name}</Link>
              </div>
              <div className="btn-container">
                <Link to={"/ModifyBookclub/" + bc.id}>
                  <button className="btn-edit">Edit</button>
                </Link>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(bc.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Create a new button so that user can add a new bookclub. This should be a form component. Add route to app.js */}
      <div>
        <Link key="create" to="/CreateBookclub" className="btn btn-success">
          Create a Bookclub
        </Link>
      </div>
    </div>
  );
}

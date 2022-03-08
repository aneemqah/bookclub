import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Bookclubsearch(props) {
  return (
    <div className="Bookclubsearch">
      <h2>Book search</h2>
      <div>
        <ul>
          {props.books.map((bc) => (
            <li className="book-preview" key={bc.id}>
              <Link to={"/Book/" + bc.id}>{bc.name}</Link>
            </li>
          ))}
        </ul>
        {/* <Link to="/Bookclub/:id">{bookClub.name}</Link> */}
      </div>
      <div class="quote">
        <blockquote>
          {" "}
          Silly things do cease to be silly if they are done by sensible people
          in an imprudent way."
          <cite>— Emma Woodhouse, Emma </cite>
        </blockquote>
      </div>
    </div>
  );
}

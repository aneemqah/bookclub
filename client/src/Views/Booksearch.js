import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Bookclubsearch(props) {
  return (
    <div className="Booksearch">
      <h2>Book search</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm" style={{ backgroundColor: "whitesmoke" }}>
            {" "}
            <ul className="book-link">
              {props.books.map((bc) => (
                <li className="book-preview" key={bc.id}>
                  <Link to={"/Book/" + bc.id}>{bc.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-sm">
            <div class="quote">
              <blockquote>
                {" "}
                Silly things do cease to be silly if they are done by sensible
                people in an imprudent way."
                <cite>— Emma Woodhouse, Emma </cite>
              </blockquote>
              <blockquote>
                {" "}
                She was a woman, after all. Living in a world created by men."
                <cite>— Taylor Jenkins Reid, Malibu Rising </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

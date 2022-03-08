import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Book from "./Book";
import Error404View from "./Error404View";

export default function Bookclub(props) {
  let { id } = useParams(); // get user ID from URL

  // let book = props.books.find((b) => b.id === bookClub.current_book);
  // if (!book) {
  //   return <Error404View />;
  // }

  const [book, setBook] = useState({});
  const [bookclub, setBookclub] = useState({});

  useEffect(() => {
    let getBookclub = props.bookClubs.find((bc) => bc.id === Number(id));
    setBookclub(getBookclub);
    if (!getBookclub) {
      return <Error404View />;
    }
    getBook(getBookclub);
  }, []);

  async function getBook(bc) {
    // We need to query the endpoint to get the book id - this is current_book. We need to store the is variable
    // To test : http://localhost:5001/Books/54493401
    try {
      let result = await fetch(`/books/${bc.current_book}`);

      // console.log(result);
      if (result.ok) {
        let bookClubs = await result.json();
        setBook(bookClubs);
      } else {
        console.log(`Server error: ${result.status} ${result.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  return (
    <div className="BookClubView">
      <h2>{bookclub.name} </h2>
      <p>This month we are reading:</p>
      <h3>{book.name}</h3>
      <p>by: {book.author}</p>
      <Link to={"/Book/" + book.id} className="book-img">
        <img src={book.cover} alt="display image"></img>
      </Link>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        {/* NOTE : Goes to SuccessView page when use clicks on Create Book Button
        uses bootstrap button, to="" is the path the user should see. This should match the component path */}
        <Link key="back" to="/Bookclubs" className="btn btn-dark">
          back
        </Link>
      </div>
    </div>
  );
}

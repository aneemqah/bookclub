import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Bookclubsearch from "./Views/Bookclubsearch";
import Bookclub from "./Views/Bookclub";
import Booksearch from "./Views/Booksearch";
import Book from "./Views/Book";
import Error404View from "./Views/Error404View";
import Login from "./Views/Login";
import CreateBookclub from "./Views/CreateBookclub";
import ModifyBookclub from "./Views/ModifyBookclub";

function App() {
  // make sure intital state is an empty array
  const [bookClubs, setBookClubs] = useState([]);
  const [books, setBooks] = useState([]);

  // state to store list of bookclubs
  // fetch bookclub back end

  // GET BOOKCLUB

  useEffect(() => {
    getBookclubs();
  }, []);

  async function getBookclubs() {
    try {
      let response = await fetch("/bookclub");
      console.log(response);
      if (response.ok) {
        let bookClubs = await response.json();
        setBookClubs(bookClubs);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  // GET BOOKS

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      let response = await fetch("/books");
      console.log(response);
      if (response.ok) {
        let books = await response.json();
        setBooks(books);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  // CREATE A NEW BOOKCLUB - this uses the POST route in bookclub.js
  // It excepts an object with the following keys & values : name, category, num_members, current_book
  // In our function below we are allowing the user two arguments to pass in and store this as an object
  const addBookclub = async (newbc, cat) => {
    // need to pass these value as obj see bookclub.js post route
    let newBookclub = {
      name: newbc,
      category: cat,
      num_members: 1, // automatically set
      current_book: null, // automatically set
    };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookclub),
    };
    try {
      let response = await fetch("/bookclub", options);
      if (response.ok) {
        let bookClubs = await response.json();
        setBookClubs(bookClubs);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  };

  // DELETE A BOOKCLUB
  const deleteBookclub = async (id) => {
    let options = {
      method: "DELETE",
    };
    try {
      let response = await fetch(`/bookclub/${id}`, options);
      if (response.ok) {
        let data = await response.json();
        setBookClubs(data);
      } else {
        console.log("Server error:", response.statusText);
      }
    } catch (err) {
      console.log("Network error:", err.message);
    }
  };

  // MODIFY A BOOKCLUB

  const modifyBookclub = async (id, name) => {
    let options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    };
    try {
      let response = await fetch(`/bookclub/${id}`, options);
      if (response.ok) {
        let data = await response.json();
        setBookClubs(data);
      } else {
        console.log("Server error:", response.statusText);
      }
    } catch (err) {
      console.log("Network error:", err.message);
    }
  };

  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Bookclubs"
            element={
              <Bookclubsearch
                bookClubs={bookClubs}
                deleteBookclub={deleteBookclub}
              />
            }
          />
          <Route
            path="/Bookclub/:id"
            element={<Bookclub bookClubs={bookClubs} books={books} />}
          />
          <Route path="/Books" element={<Booksearch books={books} />} />
          <Route path="/Book/:id" element={<Book books={books} />} />
          <Route path="*" element={<Error404View />} />
          <Route
            path="/CreateBookclub"
            element={<CreateBookclub addBookclub={addBookclub} />}
          />
          <Route
            path="/ModifyBookclub/:id"
            element={
              <ModifyBookclub
                bookClubs={bookClubs}
                modifyBookclub={(id, name) => modifyBookclub(id, name)}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

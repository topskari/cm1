import React, { useState } from "react";
import "./BookCollectionManager.css";
import Book from "./Book";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  // Handle input change for year
  function handleYearChange(event) {
    setYear(event.target.value);
  }

  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "" && year.trim() !== "") {
      setBooks((b) => [...b, { title, author, year }]);
      setTitle("");
      setAuthor("");
      setYear(""); // Clear the input fields
    }
  }

  // Delete a book from the list
  function deleteBook(title) {
    const updatedBooks = books.filter((book) => book.title !== title);
    setBooks(updatedBooks);
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="number"
          placeholder="Enter year..."
          value={year}
          onChange={handleYearChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book) => {
          return <Book {...book} key={book.title} onDelete={deleteBook} />
        })}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
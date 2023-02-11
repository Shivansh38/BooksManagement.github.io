import React, { useState } from 'react';
import './App.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, { title, author, isbn }]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleRemoveAll = () => {
    setBooks([]);
  };

  return (
    <div className="BookForm">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">Add Book</button>
      </form>
      <h2 className="book-records-title">Book Records</h2>
      {books.length > 0 ? (
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index} className="book-item">
              Title: {book.title}, Author: {book.author}, ISBN: {book.isbn}{' '}
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-records-message">No book records yet.</p>
      )}
      <button className="remove-all-button" onClick={handleRemoveAll}>Remove All</button>
    </div>
  );
};

export default BookForm;

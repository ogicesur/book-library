import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useContext(BooksContext);
  const book = books.find((book) => book.id === parseInt(bookId));

  if (!books.length) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

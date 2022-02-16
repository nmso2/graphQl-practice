import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_BOOKS, REMOVE_BOOK } from "../queries/queries";
import BookDetails from "./BookDetails";

const DisplayBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [book, setBook] = useState({});

  const [removeBook] = useMutation(REMOVE_BOOK);

  const handleRemoveBook = (bookId) => {
    removeBook({
      variables: { id: bookId },
      refetchQueries: [
        GET_BOOKS, // DocumentNode object parsed with gql
        "name", // Query name
      ],
    });
  };

  console.log(data?.books);
  if (loading) {
    return <p>Data is loading</p>;
  } else {
    return (
      <div>
        <ul>
          {data.books.map((book) => {
            return (
              <li key={book.id}>
                {book.name}
                <button onClick={() => setBook(book)}>Details</button>{" "}
                <button onClick={() => handleRemoveBook(book.id)}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
        <BookDetails book={book} />
      </div>
    );
  }
};

export default DisplayBooks;

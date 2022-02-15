import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";

const DisplayBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookId, setBookId] = useState("");

  console.log(data?.books);
  if (loading) {
    return <p>Data is loading</p>;
  } else {
    return (
      <div>
        <ul>
          {data.books.map((book) => {
            return (
              <li key={book.id} onClick={() => setBookId(book.id)}>
                {book.name}
              </li>
            );
          })}
        </ul>
        <BookDetails bookId={bookId} />
      </div>
    );
  }
};

export default DisplayBooks;

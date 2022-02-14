import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOKS } from "../queries/queries";

const DisplayBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log(data?.books);
  if (loading) {
    return <p>Data is loading</p>;
  } else {
    return (
      <div>
        <ul>
          {data.books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default DisplayBooks;

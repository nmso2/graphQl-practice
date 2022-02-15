import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOK } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Book Details of {bookId}</h1>
        <h4>Name: {data?.book?.name}</h4>
        <p>Genre: {data?.book?.genre}</p>
        <p>Author: {data?.book.author.name}</p>
      </div>
    );
  }
};

export default BookDetails;

import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  EDIT_BOOK,
  GET_AUTHORS,
  GET_BOOK,
  GET_BOOKS,
} from "../queries/queries";

const BookDetails = ({ book }) => {
  const {
    loading: authorLoading,
    error: authorError,
    data: authorData,
  } = useQuery(GET_AUTHORS);

  const [editBook] = useMutation(EDIT_BOOK);

  const { data: singleBook } = useQuery(GET_BOOK, {
    variables: { id: "62356205a1944011a1235f9a" },
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit1 = (data) => {
    // const data1 = JSON.parse(data);
    console.log(data);
    editBook({
      variables: { id: book.id, ...data },
      // variables: data1,
      refetchQueries: [
        GET_BOOKS, // DocumentNode object parsed with gql
        "name", // Query name
      ],
    });
  };

  console.log(book);

  useEffect(() => {
    reset();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit1)}>
        <label htmlFor="fname">Book name:</label>
        <input
          type="text"
          defaultValue={book?.name}
          placeholder="Enter Book Name"
          {...register("name")}
        />
        <br />
        <br />
        <label htmlFor="fname">Genre:</label>
        <input
          type="text"
          defaultValue={book?.genre}
          placeholder="Enter Book Genre"
          {...register("genre")}
        />
        <br />
        <br />
        <label htmlFor="lname">Author:</label>
        <select {...register("authorId")}>
          <option>Select author</option>
          {authorData?.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>

      <h1>Book Details of {book?.id}</h1>
      <h4>Name: {book?.name}</h4>
      <p>Genre: {book?.genre}</p>
      <p>Author: {book?.author?.name}</p>
    </div>
  );
};

export default BookDetails;

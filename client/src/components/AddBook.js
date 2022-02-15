import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_AUTHORS, ADD_BOOKS, GET_BOOKS } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  // const [addBook, { loading, error, data }] = useMutation(ADD_BOOKS);
  const [addBook, { reset }] = useMutation(ADD_BOOKS);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: { name: name, genre: genre, authorId: authorId },
      refetchQueries: [
        GET_BOOKS, // DocumentNode object parsed with gql
        "name", // Query name
      ],
    });
    reset();
  };

  if (loading) {
    return <p>Data is loading</p>;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <br />
          <br />
          <label htmlFor="fname">Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
          <br />
          <br />
          <label htmlFor="lname">Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select author</option>
            {data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default AddBook;

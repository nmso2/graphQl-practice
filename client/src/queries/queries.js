import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;
const GET_AUTHORS = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

const ADD_BOOKS = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;

export { GET_BOOKS, GET_AUTHORS, ADD_BOOKS };

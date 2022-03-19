import { gql, useQuery } from "@apollo/client";

const ADD_BOOKS = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;

const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
      author {
        name
        age
        books {
          name
          genre
        }
      }
    }
  }
`;

const GET_BOOK = gql`
  query ($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
          genre
        }
      }
    }
  }
`;

const EDIT_BOOK = gql`
  mutation editBook($id: ID!, $name: String, $genre: String, $authorId: ID) {
    editBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;

const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
      name
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
export { GET_BOOKS, GET_AUTHORS, ADD_BOOKS, GET_BOOK, EDIT_BOOK, REMOVE_BOOK };

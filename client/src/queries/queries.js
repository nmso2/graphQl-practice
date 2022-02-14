import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query getBooks {
    books {
      name
      genre
      id
    }
  }
`;
const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      name
      age
    }
  }
`;

export { GET_BOOKS, GET_AUTHORS };

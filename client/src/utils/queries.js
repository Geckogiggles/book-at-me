import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    _id
    bookCount
    email
    savedBooks {
      _id
      authors
      bookID
      description
      image
      link
      title
    }
    username
  }
}
`;

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
mutation AddBook($description: String!, $bookID: String!, $title: String!, $link: String, $image: String, $authors: [String]) {
  addBook(description: $description, bookID: $bookID, title: $title, link: $link, image: $image, authors: $authors) {
    _id
    email
    bookCount
    username
  }
}
`;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookID: String!) {
  removeBook(bookID: $bookID) {
    _id
    bookCount
    email
    savedBooks {
      bookID
      _id
    }
    username
  }
}
`

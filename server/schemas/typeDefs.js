const { gql } = require('apollo-server-express');
//this is not what the model looks like but what you actually want to GET BACK
//careful with typos and accidental symbols
//when something is requires put an ! at the end

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    savedBook: [Book]
    bookCount: Int
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookID: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(
      authors: [String],
      description: String!,
      bookID: String!,
      image: String,
      link: String,
      title: String!
      ): User
    removeBook(bookID: String!): User
  }
`;
//type query and mutation are the actual routes for getting (Query) and posting/putting/deleting (Mutations)
//args is req body (inside the paren) The colon afterwards is the (res JSON/ in graphql what you return within the resolver)
//Typedefs are a pre-plan to the logic for the routes (they are like pseudomodels. Not really models, but similar)
module.exports = typeDefs;

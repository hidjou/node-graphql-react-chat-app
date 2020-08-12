const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    username: String!
    email: String!
    createdAt: String!
    token: String
  }
  type Query {
    getUsers: [User]!
    login(username: String!, password: String!): User!
  }
  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): User!
  }
`

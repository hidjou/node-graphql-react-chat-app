const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    username: String!
    email: String!
  }
  type Query {
    getUsers: [User]!
  }
`

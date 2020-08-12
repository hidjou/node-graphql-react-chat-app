const { ApolloServer } = require('apollo-server')

const { sequelize } = require('./models')

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx) => ctx,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)

  sequelize
    .authenticate()
    .then(() => console.log('Database connected!!'))
    .catch((err) => console.log(err))
})

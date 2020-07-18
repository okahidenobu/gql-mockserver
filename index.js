const { ApolloServer } = require("apollo-server")
const typeDefs = require('./schemas')

const server = new ApolloServer({
  typeDefs,
  mocks:true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

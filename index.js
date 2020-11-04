import mongoose from 'mongoose'
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'

const { ApolloServer, gql } = require('apollo-server')

const start = async() => {

await mongoose.connect("mongodb+srv://admin:P@ssw0rd@grahpl-api.blmtu.mongodb.net/graphqlNotes?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true
})

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:P@ssw0rd@grahpl-api.blmtu.mongodb.net/graphqlNotes?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
}

start()
import apolloServer from 'apollo-server'
import mongoose from 'mongoose'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './models/resolvers.js'

const { ApolloServer } = apolloServer

const start = async () => {

    await mongoose.connect("mongodb+srv://admin:P@ssw0rd@grahpl-api.blmtu.mongodb.net/graphqlNotes?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const server = new ApolloServer({typeDefs, resolvers})
    server.listen({port: 4000}).then(({url}) => 
        console.log(`server running at ${url}`))
}

start()

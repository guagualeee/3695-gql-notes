import apolloServer from 'apollo-server'
import mongoose from 'mongoose'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './models/resolvers.js'
import corn from 'node-cron'
import moment from 'moment'
const { ApolloServer } = apolloServer
const { cron } = corn


// set a scheduled event runs everyday 00:01
cron.schedule('1 0 * * *', () => {
    let time = moment()
    let allNotes = Note.find();
    var upcoming_today = allNotes.filter( Note => Note.reminder == time.format("YYYY-MM-DD"))
    if (upcoming_today.length != 0){
        new Upcoming(upcoming_today)
        upcoming_today.save()
        }
})

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

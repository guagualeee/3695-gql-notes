import apolloServer from 'apollo-server'
import mongoose from 'mongoose'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './models/resolvers.js'
<<<<<<< Updated upstream
=======
import cron from 'node-cron'
import moment from 'moment'
import cloudinary from "cloudinary";
const { ApolloServer } = apolloServer

// set a scheduled event runs everyday 00:01
>>>>>>> Stashed changes

const { ApolloServer } = apolloServer

const start = async () => {

    await mongoose.connect("mongodb+srv://admin:P@ssw0rd@grahpl-api.blmtu.mongodb.net/graphqlNotes?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    cloudinary.config({
        cloud_name: "acit3695",
        api_key: "678699615414663",
        api_secret: "LvOoTN5f-N9mX9yrHRdnP6nDyRE",
      });
    
    cron.schedule('1 0 * * *', () => {
        let time = moment()
        let allNotes = Note.find();
        var upcoming_today = allNotes.filter( Note => Note.reminder == time.format("YYYY-MM-DD"))
        if (upcoming_today.length != 0){
            new Upcoming(upcoming_today)
            upcoming_today.save()
            }
    });
    const server = new ApolloServer({typeDefs, resolvers})
<<<<<<< Updated upstream
    server.listen({port: 4000}).then(({url}) => 
        console.log(`server running at ${url}`))
=======
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
>>>>>>> Stashed changes
}

start()

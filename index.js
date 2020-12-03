import apolloServer from 'apollo-server'
import mongoose from 'mongoose'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './models/resolvers.js'
import cron from 'node-cron'
import moment from 'moment'
import cloudinary from "cloudinary";
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
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
}

start()

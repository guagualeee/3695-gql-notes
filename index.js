const ApolloServer = require('apollo-server')
const mongoose = require('mongoose')
const { typeDefs } = require('./models/typeDefs.js')
const { resolvers } = require('./models/resolvers.js')
const cron = require('node-cron')
const moment = require('moment')
const cloudinary = require("cloudinary")

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

import mongoose from 'mongoose'

export const Upcoming = mongoose.model(
    "Upcoming", {
        title: String, 
        content: String, 
        reminder: String
    })
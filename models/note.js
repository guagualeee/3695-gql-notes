import mongoose from 'mongoose'

export const Note = mongoose.model(
    "Note", {
        author: String, 
        title: String, 
        content: String,
        tag: String,
        date: String, 
        reminder: String
    })

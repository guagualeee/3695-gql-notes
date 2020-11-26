import mongoose from 'mongoose'

<<<<<<< Updated upstream
export const Note = mongoose.model("Note", {author: String, title: String, content: String, imageurl: String})
=======
export const Note = mongoose.model(
    "Note", {
        author: String, 
        title: String, 
        content: String,
        tag: String,
        date: String, 
        reminder: String
    })
>>>>>>> Stashed changes

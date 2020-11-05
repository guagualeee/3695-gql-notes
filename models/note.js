import mongoose from 'mongoose'

export const Note = mongoose.model("Note", {author: String, title: String, content: String, imageurl: String})
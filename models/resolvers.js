import { Note } from './note.js'

export const resolvers = {
    Query: {
        notes: () => Note.find(),
        noteByAuthor:(_, {author}) => Note.find({author})
    },

    Mutation: {
        addNote: async ( _, {author, title, content, imageurl} ) => {
            const note = new Note({author, title, content, imageurl})
            await note.save()
            return note
        },
        addImageToNote: async ( _, { author, imageurl }) => {
            let note = await Note.findOneAndUpdate(author, imageurl)
            await note.save()
            return note;
        }
    }
}
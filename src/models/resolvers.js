import { Note } from './Notes.js'

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
        
        addImageToNote: async ({ _id, imageurl }) => {
            const filter = { id: _id };
            const update = { imageURL: imageurl };
            let note = await Note.findOneAndUpdate(filter, update)
            await note.save()
            note = await Note.findOne(fileter)
            return note;
        },
    }
}
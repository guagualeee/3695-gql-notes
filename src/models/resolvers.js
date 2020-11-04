import { Note } from './Notes.js'

export const resolvers = {
    Query: {
        notes: () => Note.find(),
        noteByAuthor:(_, {author}) => Note.find({author})
    },

    Mutation: {
        addNote: async ( _, {author, title, content} ) => {
            const note = new Note({author, title, content})
            await note.save()
            return note
        },
        
        async addImageToNote(parent, args) {
            const image = await cloudinary.uploader.upload('./images/screenshot1.png', { tags: 'screenshot', public_id: 'screenshot1' })
            return image
        }
    }
}
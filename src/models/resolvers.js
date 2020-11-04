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
        
        async addImageToNote(_id, imageurl) {
            const image = await cloudinary.uploader.upload('imageurl', { tags: 'imageurl', public_id: 'imageurl' })
            return image
        }
    }
}
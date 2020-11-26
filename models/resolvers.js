import { Note } from './note.js'
<<<<<<< Updated upstream
=======
import { Upcoming } from './upcoming.js'
import cloudinary from "cloudinary";


>>>>>>> Stashed changes

export const resolvers = {
    Query: {
        notes: () => Note.find(),
<<<<<<< Updated upstream
        noteByAuthor:(_, {author}) => Note.find({author})
    },

    Mutation: {
        addNote: async ( _, {author, title, content, imageurl} ) => {
            const note = new Note({author, title, content, imageurl})
=======
        upcomings: () => Upcoming.find(),
        noteByTitle: (_, { title }) => Note.find({ title }),
        noteByTag: (_, { tag }) => Note.find({ tag }),
        noteByDate: (_, { date }) => Note.find({ date }),

        /*
        
        upcomings: async() => {
            let time = moment()
            let allNotes = await Note.find();
            var upcoming = allNotes.filter( Note => Note.reminder == time.format("YYYY-MM-DD"))
            if (upcoming.length != 0){
                return upcoming
                }
        },
        */
        noteByAuthor:(_, { author }) => Note.find({ author })
    },

    Mutation: {
        addNote: async ( _, {author, title, content, tag, date, reminder, imageurl} ) => {
            const note = new Note({author, title, content, tag, date, reminder, imageurl})
>>>>>>> Stashed changes
            await note.save()
            return note
        },
        updateNoteWithImage: async ( _, {_id, imageurl} ) => {
            const note = await Note.findByIdAndUpdate(_id, { image: `${await cloudinary.uploader.upload(imageurl)}` });
            if (image !== null) {
            cloudinary.uploader.upload(image, { tags: 'img' });
            }
            return note;
        },
    }
}
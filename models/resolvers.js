import { Note } from './note.js'
import { Upcoming } from './upcoming.js'




export const resolvers = {
    Query: {
        notes: () => Note.find(),
        upcomings: () => Upcoming.find(),
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
        noteByAuthor:(_, {author}) => Note.find({author})
    },

    Mutation: {
        addNote: async ( _, {author, title, content, reminder} ) => {
            const note = new Note({author, title, content, reminder})
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
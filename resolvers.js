import { Note } from './models/notes.js';

export const resolvers = {
    Query : {
       async allNotes(){
           return await Note.find();
       },
    }
};

import Note from './models/note';

export const resolvers = {
    Query : {
       async allNotes(){
           return await Note.find();
       },
       async getNote(root, {_id}){
        return await Note.findById(_id);
    },
    }
};
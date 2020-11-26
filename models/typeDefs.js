import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`

  type Note{
    _id: ID!
    author: String!
    title: String!
    content: String
<<<<<<< Updated upstream
    imageurl: String
=======
    tag: String
    date: String
    reminder: String
    imageurl: String
  }

  type Upcoming{
    title: String!
    content: String!
    reminder: String!
>>>>>>> Stashed changes
  }

  type Query {
    notes: [Note]
    noteByAuthor(author:String!): [Note]
<<<<<<< Updated upstream
  }

  type Mutation {
    addNote(author: String!, title: String!, content: String!): Note!
    addImageToNote(author: String!, imageurl: String!): Note!
=======
    noteByTitle(title:String!): [Note]
    noteByTag(tag:String!): [Note]
    noteByDate(date:String!): [Note]
    upcomings: [Upcoming]
  }

  type Mutation {
    addNote(author: String!, title: String!, content: String!, tag: String!, date: String! reminder:String!, imageurl: String): Note!
    updateNoteWithImage(_id: ID!, imageurl: String!): Note!
>>>>>>> Stashed changes
  }
    
`;
import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`

  type Note{
    _id: String!
    author: String!
    title: String!
    content: String
    reminder: String
  }

  type Upcoming{
    title: String!
    content: String!
    reminder: String!
  }

  type Query {
    notes: [Note]
    noteByAuthor(author:String!): [Note]
    upcomings: [Upcoming]
  }

  type Mutation {
    addNote(author: String!, title: String!, content: String!, reminder:String!): Note!
    addImageToNote(author: String!, imageurl: String!): Note!
  }
    
`;
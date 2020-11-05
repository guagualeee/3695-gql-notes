import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`

  type Note{
    _id: String!
    author: String!
    title: String!
    content: String
    imageurl: String
  }

  type Query {
    notes: [Note]
    noteByAuthor(author:String!): [Note]
  }

  type Mutation {
    addNote(author: String!, title: String!, content: String!): Note!
    addImageToNote(_id: String!, imageurl: String!): Note!
  }
    
`;
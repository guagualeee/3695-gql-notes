import aserver from 'apollo-server'

const {gql} = aserver

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  scalar Date
  scalar Time
  scalar URL

  type Note{
	id: ID!
	title: String!
  author:String!
  create_date: Date!
  completed:Boolean
  last_update_date: Date!
	category:String
  link:URL
	image_link:URL
  
    }

    type Query {
        notes: [Note]
      }
`;

export const notes = mongoose.model

const notes = [
    {
      id:'1',
      title:'sleep',
      author:'zliu',
      create_date:'2020-10-03',
      completed:false,
      last_update_date:'2020-10-03',
      category:'todo list',
      

    },
    {
        id:'2',
        title:'eat',
        author:'zliu',
        create_date:'2020-10-03',
        completed:false,
        last_update_date:'2020-10-03',
        category:'todo list',
        

    },
    {
        id:'3',
        title:'tomato',
        author:'zliu',
        create_date:'2020-10-03',
        completed:false,
        last_update_date:'2020-10-03',
        category:'shopping list',
        


    },
  ];
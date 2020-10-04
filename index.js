const { ApolloServer, gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
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
  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      notes() {
        return notes;
      },
    },
  };
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


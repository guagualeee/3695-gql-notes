# 3695-gql-notes
Team 6
    Gerami, Raman
    Liu, Leo

query{
    notes{
        author
        title
        content
        reminder
    }
}

query{
    noteByAuthor(author:"liu"){
        author
        title
        content
    }
}

mutation addNote { 
  addNote(
        author: "liu",
        title:"ISSP Project",
        content: "get it done",
  			reminder: "2020-11-11")
    {
        author
        title
        content
      	reminder
    }
}
mutation addNote { 
  addNote(
        author: "liu",
        title:"Azure lab",
        content: "Due 11:30",
  			reminder: "2020-11-11")
    {
        author
        title
        content
      	reminder
    }
}

mutation addImageToNote {
  addImageToNote (
    author: "liu",
    imageurl: "https://res.cloudinary.com/acit3695/image/upload/v1604469445/screenshot_1.png"
  ) {
    author
    imageurl
  }
}
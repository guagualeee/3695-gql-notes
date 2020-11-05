# 3695-gql-notes
Team 6
    Gerami, Raman
    Liu, Leo

query{
    notes{
        author
        title
        content
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
        title:"query mutation",
        content: "get it work")
    {
        author
        title
        content
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
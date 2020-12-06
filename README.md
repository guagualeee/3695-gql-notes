# 3695-gql-notes
Team 6
    Gerami, Raman
    Liu, Leo
The current graphql api that:
- can create a note
- update a note with image
- read all notes
- search for notes using: (title, tags and a date)

An individual note contain:
- title
- id
- note body(content)
- tags
- a date created
- reminder
- images

Leo Liu was responsible for:
- create a note
- update a note with image
- read all notes

Raman Gerami was responsible for:
- get notes by title
- get notes by tag
- get notes by date
- run scheduled reminder for upcoming notes

Example querys:
```graphql
query{ 
  notes{ 
    author 
    title 
    content 
    tag
    date
    reminder
    imageurl
  } 
}

query{ 
  upcomings{ 
    title 
    content 
    reminder
  } 
}

query{ 
   noteByTitle(title:"ISSP Project"){ 
    author 
    title 
    content 
    tag
    date
    reminder
    imageurl
  } 
}

query{ 
   noteByTag(Tag:"TODO"){ 
    author 
    title 
    content 
    tag
    date
    reminder
    imageurl
  } 
}

query{ 
   noteByDate(date:"2020-12-03"){ 
    author 
    title 
    content 
    tag
    date
    reminder
    imageurl
  } 
}

mutation 
addNote { 
  addNote( 
    author: "Leo", 
    title:"Final Project", 
    content: "go for it",
    tag:"FINAL",
    date:"2020-12-04",
    reminder: "2020-11-11",
imageurl:"https://res.cloudinary.com/acit3695/image/upload/v1604469445/screenshot_1.png") 
  { author 
    title 
    content 
    tag 
    date 
    reminder 
    imageurl } 
} 
mutation 
updateNoteWithImage { 
  updateNoteWithImage( 
   _id: "5fc92a95287dbe0011f7a08c", 
imageurl:"http://res.cloudinary.com/acit3695/image/upload/v1604430709/samples/landscapes/nature-mountains.jpg") 
  { author 
    title 
    content 
    tag 
    date 
    reminder 
    imageurl } 
} 

```

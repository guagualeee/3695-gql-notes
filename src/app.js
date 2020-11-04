const express = require('express')
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended:true }))

cloudinary.config({ 
    cloud_name: 'dbzh8sve0', 
    api_key: '547842811132176', 
    api_secret: 'dIkaQMYKJbjPKzkhv9HOp07fr7o' 
});

app.get("/", (req, res) => {
    res.json({ message: "home page"})
})

app.post("upload-image", (req, res) => {
    const data = {
        image: req.body.image
    }

    cloudinary.uploader.upload(data.image)
    .then((results) => {
        res.status(200).send({
            message: "success",
            results
        })
    }).catch((e) => {
        res.status(500).send({
            message: "failure",
            e
        })
    })
})

app.listen(4000, () => {
    console.log('App is running on localhost:4000')
})
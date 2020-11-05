const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'acit3695', 
    api_key: '678699615414663', 
    api_secret: 'LvOoTN5f-N9mX9yrHRdnP6nDyRE' 
});

async function uploadImage() {
    try {
        const image = await cloudinary.uploader.upload('./images/screenshot1.png', { tags: 'screenshot', public_id: 'screenshot1' })
        console.log(image)
        } catch(e) {
        console.log(e)
    }
}

uploadImage()
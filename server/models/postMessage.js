//Model to create a Schema
/*
Schema with the help of Mongoose will help create
a blueprint for type of data and the behaviour of the data.

The data abstraction is done in a form of a document.

We define the specific type of how the data looks, say format of the data
and how the data will behave.
*/

import mongoose from "mongoose";

const postMessage = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, //Here type=String as we will convert image to String using react-file-base64.
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        value: new Date()
    }
});

//Now we have a Schema. Let's convert it into a Model

const PostMessage = mongoose.model('PostMessage', postMessage);
//PostMessage - This is just a reference name to the schema created with name "postMessage".
//Exporting a mongoose model from a postMessage file and later on this model
//we will run commands such as find, create, delete and update.
export default PostMessage;
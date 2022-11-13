//Import the PostMessage model
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        //Searching/Finding via models take time
        //Hence, the following find operation becomes async-await.
        const postMessage = await PostMessage.find();
        console.log("postMessage", postMessage);
        res.status(200).json(postMessage);
        //res.send("200 Success OK received");
    } catch (error) {
        res.status(404).json({ message: error.message });
        //res.send("Error occured");
    }
    //res.send("Test");
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post); //PostMessage - the schema that we created
    //Sending the data we receive from the frontend, to the mongodb database
    //via nodejs that is linked to schema created using mongoose.

    try {
        await newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

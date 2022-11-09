import express from "express";

const router = express.Router();

//The below URL cannot be reached by "localhost:5000/"
//It can be reached by "localhost:5000/posts"

router.get("/", (req, res) => {
    //Callback function that get executed when we visit path = '/'
    res.send("This works");
});

export default router;
import express from "express";
import { getPosts, createPost } from "../controller/controller_posts.js";

const router = express.Router();

//The below URL cannot be reached by "localhost:5000/"
//It can be reached by "localhost:5000/posts"

// router.get("/", (req, res) => {
//     Callback function that get executed when we visit path = '/'
//     res.send("This works well !!!");
// });

router.get("/", getPosts);

//Additional routes may easily be added with clean code.
//router.get("/", method1);
//router.get("/", method2);
//router.get("/", method3);

router.post("/getPosts", createPost);

//So here we will easily make calls to our controllers bu mentioning fn names and writing logic in controllers.

export default router;
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/router_posts.js";

//Initialize the app by equating to express();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Using the express middleware (app.use() method) to connect the routes with our app. 
app.use("/posts", postRoutes);
// `/posts` means whenever we visit anything inside postRoutes, 
// the url will have /posts appended.
// Example : www.memories.com/posts/<your other called methods>

//Setting up connection with MongoDB.
const CONNECTION_URL = "mongodb+srv://krishna:1kT1UP63qP2w7ix6@cluster0.hzkzn.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//Deprecated
//mongoose.set('useFindAndModify', false);
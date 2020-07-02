const express = require("express");
const app = express();

//bring in routes
const postRoutes = require("./routes/post");

app.get("/",postRoutes.getPosts);

const port = 3000;
app.listen(port, () => {
    console.log("A node js API is listening on port :",port); 
});
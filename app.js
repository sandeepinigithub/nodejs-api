const express = require("express");
const app = express();
const morgan = require("morgan");

//bring in routes
const postRoutes = require("./routes/post"); // we do not need destruction of just one method 

//middleware
app.use(morgan("dev"));

app.use("/",postRoutes); // we here pass postRoutes ,this is now middleware 

const port = 3000;
app.listen(port, () => {
    console.log("A node js API is listening on port :",port); 
});
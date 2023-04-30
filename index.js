const express = require('express');
const app = express();
const port = 3000;

//Importing
//importing our router
const userRouter = require("./routes/users")
//importing custom logging middleware
const { logReqRes } = require("./middlewares/RequestResponseLogger")

//Middleware setup
//request logger middleware
app.use(logReqRes("logs.txt"));
//improting requestbody parsing middleware, used in contollers
app.use(express.json());

//Router setup
//any request on /user will be sent to "/" route of the userRouter, change endpoint here, will change for everywhere.
app.use("/users", userRouter);

console.log("Server Called")

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
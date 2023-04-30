//This is controller file, it has access to both model and router(i.e views as we are showing data as response)
console.log("Controller Called")

//It uses model to CRD data
//it uses router to present the data.

//uses model to access and modify database
//these functions are declared in model to operate db, requiring them to use.
const { readUsers,
    addUser,
    deleteUser
} = require("../models/user")

//each function when called, passes the request and response for further processing and presents the data returned back.
function handleGetUsers(req, res) {
    console.log("a get req in controller")
    return res.send(readUsers());
}

function handleAddUser(req, res) {
    console.log("a post req in controller");
    return res.send(addUser(req.body.username))
}

function handleDeleteUser(req, res) {
    console.log("a delete req in controller")
    return res.send(deleteUser(req.body.username));
}

module.exports = {
    handleGetUsers,
    handleAddUser,
    handleDeleteUser
}
//exports these controller functions for the routes.





//learnings
/*
we have added this code in the main index.js file.

app.use(express.json()); // add json parsing middleware here
// then pass app instance to route files
app.use('/users', userRouter);

this code requires express.json and adds middleware so everyfile which has instance to main file
in any way, will be able to use the express.json middleware.


if we havent added it on index.js main page, we have to do it manually like this on this page
 */
//instance of expres to use express.json middleware to parse the body data.
// const express = require("express");


// function handleAddUser(req, res) {
//     console.log("a post req in controller");
//     return res.send(addUser(req.body.newUsername)).use(express.json());//middleware to parse json body
// }


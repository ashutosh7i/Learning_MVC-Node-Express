const express = require('express')
const router = express.Router();

//we will be sending new uses as json, so using json middleware
router.use(express.json());
//applying middleware here will automatically allow every page with its instance to use it.


//handling request using contollers,
//after calling these functions, the controller will handle the request.
const {
    handleGetUsers,
    handleAddUser,
    handleDeleteUser
} = require("../controllers/users")

//main routing for application,handler are called controllers.
router.     //will export this router
    route("/", console.log("Router Called"))  //defining route a single time for chained handlers
    .get((req, res) => {
        console.log("a get req in route")
        handleGetUsers(req, res);
    })
    .post((req, res) => {
        console.log("a post req in route")
        handleAddUser(req, res);
    })
    .delete((req, res) => {
        console.log("a delete req in route")
        handleDeleteUser(req, res);
    });

//exporting as module for main index file
module.exports = router;
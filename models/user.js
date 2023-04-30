//It is a text file based database that is capable of storing username and id in a file.
console.log("Model Called")

//As a model, it only has access to database and nothing else.
//this model file will handle the user reading and user saving part using fs
const fs = require('fs');

// read all users from the text file
function readUsers() {
  try {
    return fs.readFileSync("./UserDatabase.txt", "utf-8").split("\n");//text file in root directory
  } catch (err) {
    // error occurred while reading users
    return `Error reading users: ${err.message}`;
  }
}

// save a new user to the text file
function addUser(username) {
  try {
    let users = readUsers();

    // check if user already exists in the database
    if (users.some(user => user.split(" ")[1] === username)) {
      return `User ${username} already exists`;
    }

    const lastId = users.length ? parseInt(users[users.length - 1].split(" ")[0]) : 0;
    const newId = lastId + 1;
    const newUser = `${newId} ${username}`;
    users.push(newUser);
    fs.writeFileSync("./UserDatabase.txt", users.join("\n"));
    return `New user ${username} created`;
  } catch (err) {
    // error occurred while saving new user
    return `Error adding user: ${err.message}`;
  }
}

//delete a user from the text file by ID or username
function deleteUser(userIdOrUsername) {
  try {
    let users = readUsers();
    let filteredUsers = [];

    if (isNaN(userIdOrUsername)) {
      // if the parameter is a string (username), delete the user by username
      filteredUsers = users.filter(user => user.split(" ")[1] !== userIdOrUsername);
    } else {
      // if the parameter is a number (user ID), delete the user by ID
      filteredUsers = users.filter(user => user.split(" ")[0] !== userIdOrUsername);
    }

    if (users.length === filteredUsers.length) {
      // no user found with given ID or username
      return `User ${userIdOrUsername} not found`;
    }

    // user successfully deleted
    fs.writeFileSync("./UserDatabase.txt", filteredUsers.join("\n"));
    return `User ${userIdOrUsername} deleted`;
  } catch (err) {
    // error occurred while deleting user
    return `Error deleting user: ${err.message}`;
  }
}

module.exports = {
  readUsers,
  addUser,
  deleteUser
}




// example usage
//console.log(readUsers()); // outputs all users in the file
//addUser("newww"); // saves a new user with the username "userone"
// //console.log(readUsers()); // outputs all users including the new user
// deleteUser("someuser"); // deletes the user with ID or username
// console.log(readUsers()); // outputs all users except the deleted user


//original codes-
// // read all users from the text file
// function readUsers() {
//   return fs.readFileSync("./UserDatabase.txt", "utf-8").split("\n");
// }

// // save a new user to the text file
// function addUser(username) {
//   let users = readUsers();
//   const lastId = users.length ? parseInt(users[users.length - 1].split(" ")[0]) : 0;
//   const newId = lastId + 1;
//   const newUser = `${newId} ${username}`;
//   users.push(newUser);
//   fs.writeFileSync("./UserDatabase.txt", users.join("\n"));
//   return `new user: ${username} created`;
// }

// delete a user from the text file by ID or username
// function deleteUser(userIdOrUsername) {
//   console.log(userIdOrUsername)
//   let users = readUsers();
//   let filteredUsers = [];
//   if (isNaN(userIdOrUsername)) {
//     // if the parameter is a string (username), delete the user by username
//     filteredUsers = users.filter(user => user.split(" ")[1] !== userIdOrUsername);
//   } else {
//     // if the parameter is a number (user ID), delete the user by ID
//     filteredUsers = users.filter(user => user.split(" ")[0] !== userIdOrUsername);
//   }
//   fs.writeFileSync("./UserDatabase.txt", filteredUsers.join("\n"));
// }

//current codes are updated with try and catch.
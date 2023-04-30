//this model file will handle the user reading and user saving part using fs
const fs = require('fs');

//It is a text file based database that is capable of storing username and id.

// read all users from the text file
function readUsers() {
  return fs.readFileSync("./UserDatabase.txt", "utf-8").split("\n");
}

// save a new user to the text file
function saveUser(username) {
  let users = readUsers();
  const lastId = users.length ? parseInt(users[users.length - 1].split(" ")[0]) : 0;
  const newId = lastId + 1;
  const newUser = `${newId} ${username}`;
  users.push(newUser);
  fs.writeFileSync("./UserDatabase.txt", users.join("\n"));
}

// delete a user from the text file by ID or username
function deleteUser(userIdOrUsername) {
  let users = readUsers();
  let filteredUsers = [];
  if (isNaN(userIdOrUsername)) {
    // if the parameter is a string (username), delete the user by username
    filteredUsers = users.filter(user => user.split(" ")[1] !== userIdOrUsername);
  } else {
    // if the parameter is a number (user ID), delete the user by ID
    filteredUsers = users.filter(user => user.split(" ")[0] !== userIdOrUsername);
  }
  fs.writeFileSync("./UserDatabase.txt", filteredUsers.join("\n"));
}

// example usage
//console.log(readUsers()); // outputs all users in the file
//saveUser("newww"); // saves a new user with the username "userone"
// //console.log(readUsers()); // outputs all users including the new user
// deleteUser("someuser"); // deletes the user with ID or username
// console.log(readUsers()); // outputs all users except the deleted user

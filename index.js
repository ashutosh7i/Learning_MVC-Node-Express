const express = require('express');
const app = express();
const port = 3000;

//importing user router
const userRouter = require("./routes/users")
//any request on /user will be sent to /route in userRouter
app.use("/user", userRouter)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
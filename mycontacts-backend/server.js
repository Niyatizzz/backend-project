// console.log("hello world")

const express = require('express');
const connectDb = require('./config/dbConnection')
const  errorHandler  = require('../mycontacts-backend/middleware/errorHandler');
const dotenv = require("dotenv").config();

connectDb()
const app = express()

const port = process.env.PORT || 5000; //static server thats y define port on env file

//routes to access and not get error 404
//but routes have separate folder

// app.get('/api/contacts', (req, res) => {
//     // res.send("get all contacts")
//     res.json({messege: "get all contacts"})
// })

//middleware
app.use(express.json()) // to parse the req body from client
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)


//controllers - to controll all the logic reg req and res from datbases

app.listen(port, () => {
    console.log(`server running on ${port}`)
})

//now tht we've created an app thats listening to reqs we need to test it using a http client like thunder client -exension in vscode or postman>>
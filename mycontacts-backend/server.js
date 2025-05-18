// console.log("hello world")

const express = require('express');
const dotenv = require("dotenv").config();

const app = express()

const port = process.env.PORT || 5000; //static server thats y define port on env file

//routes to access and not get error 404
//but routes have separate folder

// app.get('/api/contacts', (req, res) => {
//     // res.send("get all contacts")
//     res.json({messege: "get all contacts"})
// })

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"))

//controllers - to controll all the logic reg req and res from datbases

app.listen(port, () => {
    console.log(`server running on ${port}`)
})

//now tht weve created an app thats listening to reqs we need to test it using a http client like thunder client -exension in vscode or postman>>
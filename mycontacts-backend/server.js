// console.log("hello world")

const express = require('express');
const dotenv = require("dotenv").config();

const app = express()

const port = process.env.PORT || 5000; //static server thats y define port on env file

app.listen(port, () => {
    console.log(`server running on ${port}`)
})

//now tht weve created an app thats listening to reqs we need to test it using a http client like thunder client -exension in vscode or postman>>
const asyncHandler = require("express-async-handler")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username||!email||!password) {
        res.status(400);
        throw new Error("all fields are mandatory")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("email already registered");
    }

    //hash pasword - using bcrypt library
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password : ", hashedPassword)

    const user = await User.create({username, email, password: hashedPassword,})
    console.log(`user created ${user}`)
    if(user) {
      res.status(201).json({_id: user.id, email: user.email})
    } else {
      res.status(400)
      throw new Error("invalid credentials")
    }
    res.json({ messege: "register the user" });
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  if(!email||!password) {
    res.status(400);
    throw new Error("all fields are mandatory") 
  }
  const user = await User.findOne({email});
  //compare password
  if(user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
  process.env.ACCESS_TOKEN_SECRET, {expiresIn : "24h"});
    res.status(200).json({accessToken})
  } else {
    res.status(401)
    throw new Error("invalid credentials")
  };
});

//@desc current user info
//@route POST /api/users/current
//@access private - only a logged in user can get info
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser}
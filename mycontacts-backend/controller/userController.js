const asyncHandler = require("express-async-handler")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ messege: "register the user" });
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ messege: "login the user" });
});

//@desc current user info
//@route POST /api/users/current
//@access private - only a logged in user can get info
const currentUser = asyncHandler(async (req, res) => {
  res.json({ messege: "current user info" });
});

module.exports = {registerUser, loginUser, currentUser}
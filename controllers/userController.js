const asyncHandler = require("express-async-handler");

//Register user
//POST /api/users/register
// access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//Login user
//POST /api/users/login
// access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//Current user
//GET /api/users/current
// access public
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };

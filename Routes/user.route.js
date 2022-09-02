const express = require("express");
const { getRandomUser, getUsers } = require("../Controllers/user.controller");

const router = express.Router();

// GET ALL USERS - IF YOU WENT, YOU CAN USE QUERY PARAMETOR
// (http://localhost:5000/user/all?size=number)
router.route("/all").get(getUsers);

// GET A RANDOM USER ROUTE
router.route("/random").get(getRandomUser);

module.exports = router;

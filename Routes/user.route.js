const express = require("express");
const { getRandomUser } = require("../Controllers/user.controller");

const router = express.Router();

// GET A RANDOM USER ROUTE
router.route("/random").get(getRandomUser);

module.exports = router;

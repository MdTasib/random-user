const users = require("../Data/data.json");

// GET ALL USERS
const getUsers = (req, res) => {
	const { size } = req.query;
	const result = users.slice(0, size);
	res.send(result);
};

// GET A RANDOM USER
const getRandomUser = (req, res) => {
	const randomNumber = Math.floor(Math.random() * users.length);
	const result = users[randomNumber];
	res.send(result);
};

module.exports = { getRandomUser, getUsers };

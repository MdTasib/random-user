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

// SAVW A USER
const saveUser = (req, res) => {
	const user = req.body;
	users.push(user);
	res.send(users);
};

module.exports = { getRandomUser, getUsers, saveUser };

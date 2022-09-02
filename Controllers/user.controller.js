const users = require("../Data/data.json");

// GET A RANDOM USER
const getRandomUser = (req, res) => {
	const randomNumber = Math.floor(Math.random() * users.length);
	const randomUser = users[randomNumber];
	res.send(randomUser);
};

module.exports = { getRandomUser };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/users/userModel');

const authenticateUser = async (email, password) => {
	try {
		const user = await userModel.findUserByEmail(email);
		if (!user) return { error: true, message: 'User or email doesnt match' };

		const passMatched = await bcrypt.compare(password, user.password);
		if (!passMatched) return { error: true, message: 'User or email doesnt match' };

		const token = jwt.sign({ email: user.email, id: user.id }, process.env.SECRET_KEY);
		return { token }
	} catch (error) {
		console.log({ error });
	}
}

const createUser = async (user) => {
	const saltRounds = 10;
	const cryptedPass = await bcrypt.hash(user.password, saltRounds);
	const insertedUser = await userModel.create({ ...user, password: cryptedPass });

	console.log({ insertedUser });
	return insertedUser;
}

module.exports = {
	authenticateUser,
	createUser,
}
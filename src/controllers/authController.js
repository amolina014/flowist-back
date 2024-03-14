const authService = require('../services/authService');
const userService = require('../services/userService');

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const token = await authService.authenticateUser(email, password);
		if (token.error) return res.status(401).json({ error: true, message: `Access denied: ${token.message}` });
		return res.json({ ...token });

	} catch (error) {
		console.log('Error trying to login', error);
		return res.status(500).json({
			error: true,
			message: 'Error trying to login'
		});
	}
}

const create = async (req, res) => {
	const { email, password, username } = req.body;
	try {
		const result = await authService.createUser({ email, password, username });
		return res.json({ user: { ...result } });
	} catch (err) {
		console.log('Error creating new user', err);
		return res.status(402).json({
			error: true,
			message: 'Cant create new user',
		})
	}
}

const getUserById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const user = await userService.findById(id);
		return res.json({
			user
		});
	} catch (err) {
		next(err);
	}

}

module.exports = {
	login,
	create,
	getUserById,
}
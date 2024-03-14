const userModel = require('../models/users/userModel');
const { encrypt } = require('../util/crypto');
const { ValidationError, CryptoError, ErrorBase } = require('./errorService');


const createUser = async (userToCreate) => {
	try {
		// Buscar si ya existe el usuario en la BD
		const user = await userModel.findByEmail(userToCreate.email);

		// Si ya existe, lanzar un ValidationError
		if (user) throw new ValidationError(`${userToCreate.email} already in use`);

		// Si no existe, proceder a crearlo
		const pass = await encrypt(userToCreate.password);
		const newUser = await userModel.create({ ...userToCreate, password: pass });
		return newUser;
	} catch (err) {
		console.log(err);
		if (err instanceof ErrorBase) {
			throw err;
		}

		throw new Error('Error creating user', err.message);
	}
}

const findById = async id => {
	return await userModel.findById(id);
}

module.exports = {
	createUser,
	findById,
}
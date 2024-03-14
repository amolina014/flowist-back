const bcrypt = require('bcrypt');
const { CryptoError } = require('../services/errorService');
const SALT_ROUNDS = 10;

const encrypt = async text => {
	try {
		const encryptedText = await bcrypt.hash(text, SALT_ROUNDS);
		return encryptedText;
	} catch (err) {
		console.log(err);
		throw new CryptoError();
	}
}

module.exports = { encrypt };
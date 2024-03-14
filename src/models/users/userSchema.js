const { mongoose } = require('../../db');

const userSchema = new mongoose.Schema(
	{
		username: String,
		email: String,
		password: String,
		config: Object,
	},
	{ collection: 'users' }
)

const User = mongoose.model('User', userSchema);

module.exports = { User }
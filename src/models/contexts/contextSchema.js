const { mongoose } = require('../../db');

const contextSchema = new mongoose.Schema(
	{
		name: String,
		description: String,
		tasks: Array,
		userId: String
	},
	{ collection: 'contexts' }
)

const Context = mongoose.model('Context', contextSchema);

module.exports = { Context };
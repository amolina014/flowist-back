const { mongoose } = require('../../db');

const tagSchema = new mongoose.Schema(
	{
		name: String,
		tasks: Array,
		projects: Array,
		userId: String,
		properties: Object,
	},
	{ collection: 'tags' }
)

const Tag = mongoose.model('Tag', tagSchema);

module.exports = { Tag };
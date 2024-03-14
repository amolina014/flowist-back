const { mongoose } = require('../../db');

const projectSchema = new mongoose.Schema(
	{
		name: String,
		description: String,
		state: String,
		startDate: Date,
		endDate: Date,
		lastUpdate: Date,
		tasks: Array,
		userId: String,
	},
	{ collection: 'projects' }
)

const Project = mongoose.model('Project', projectSchema);

module.exports = { Project };
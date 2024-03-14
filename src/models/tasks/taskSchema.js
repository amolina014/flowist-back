const { mongoose } = require('../../db');

const taskSchema = new mongoose.Schema(
	{
		name: String,
		description: String,
		priority: String,
		state: String,
		startDate: Date,
		endDate: Date,
		lastUpdate: Date,
		projectId: String,
		contextId: String,
		userId: String,
	},
	{ collection: 'tasks' }
)

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };
const mongoose = require('mongoose');

const connectDB = async () =>
	await mongoose.connect('mongodb://127.0.0.1:27017/gtd_project')
		.then(res => console.log('Mongo connected'))
		.catch(err => console.error(err));
connectDB();

module.exports = { mongoose };
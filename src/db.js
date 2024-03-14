const mongoose = require('mongoose');

const MONGO_BBDD = process.env.MONGO_BBDD || 'mongodb://127.0.0.1:27017/gtd_project';
const connectDB = async () =>
	await mongoose.connect(MONGO_BBDD)
		.then(res => console.log('Mongo connected'))
		.catch(err => console.error(err));
connectDB();

module.exports = { mongoose };
const mongoose = require('mongoose');

let connectionString =
	process.env.DEV_MODE === 'true'
		? process.env.LOCAL_BBDD
		: process.env.ATLAS_BBDD;

const connectDB = async () =>
	await mongoose.connect(connectionString)
		.then(res => console.log('Mongo connected'))
		.catch(err => console.error(err));
connectDB();

module.exports = { mongoose };
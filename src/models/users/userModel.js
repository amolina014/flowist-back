const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { User } = require('./userSchema');
const { ValidationError } = require('../../services/errorService');

const saltRounds = 10;

const password = 'admin';
let cryptedPass = '';


/************************** 
	CREATE
**************************/
const create = async userData => {
	const user = new User({ ...userData });
	await user.save();
	return { ...userData, id: user._doc._id.toString() };
}


/************************** 
	READ
**************************/
const findAll = async () => {
	const result = await User.find();
	return result;
}

const findById = async id => {
	const result = await User.findById(id);
	return result;
}

const findByEmail = async email => {
	const result = await User.findOne({ email });
	return result;
}

/************************** 
	UPDATE
**************************/

/************************** 
	DELETE
**************************/


const findUser = async user => {

}

const findUserByEmail = async (email) => {
	cryptedPass = cryptedPass === '' ? await bcrypt.hash(password, saltRounds) : cryptedPass;
	return {
		id: uuidv4(),
		email,
		password: cryptedPass
	}
}


module.exports = {
	findUserByEmail,
	create,
	findAll,
	findById,
	findByEmail,
}


const mock_user = {
	user_id: '',
	username: '',
	first_name: '',
	last_name: '',
	email: '',
	password: '',
	inbox: [],
	future: [],
	archived: [],
	projects: [],
	daily: [],
}

const mock_task = {
	task_id: '',
	title: '',
	description: '',
	lead: 'user_id',
	status: '', // {inbox, future, project, archived, daily}
	work_flow: '',
	created_date: '',
	updated_date: '',
}
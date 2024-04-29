const mongoose = require('mongoose');
const projects = require('./projects');
const lecture = require('./lectures');

const userSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,

	},
	username: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6,
	},
	role: {
		type: String,
		default: 'user',
	},
	imageURL: {
		type: String,
		default:
			"https://www.flaticon.com/free-icons/user",
	},
	achivement: {
		type: String,
		default: 'Beginner',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	courses: {
		type: Array,
		default: [],
	},
	coutry: {
		type: String,
	},
	age: {
		type: Number,
		required: true,
		default: 18,
		min: 18,
		max: 100,
	},
	project_id: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: projects,
		},
	],
	lecture_id: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: lecture,
		},
	],
	news_id: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'news',
		},
	],
	token: {
		type: String,
		require: true,
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
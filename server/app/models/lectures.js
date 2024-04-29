const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	title: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	description: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	peopleAttend: {
		type: Number,
		default: 0,
	},
	documentation: {
		type: String,
		default: 'No documentation',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	imagesURL: {
		type: String,
	},
	numberoflecture: {
		type: Number,
		default: 0,
	},
	duration: {
		type: Number,
		default: 0,
	},
	difficulty: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	codelink: {
		type: String,
		default:
			'<a href="https://github.com/Dave-code-creater" title="Link code"',
	},
	user_id: [
		{
			ref: 'user',
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	],
});

const Lectures = mongoose.model('Lectures', lectureSchema);
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
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
		max: 100,
	},
	field: {
		type: String,
		required: true,
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
	levle: {
		type: String,
		default: 'Beginner',
	},
	user_id: [
		{
			ref: 'user',
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	],
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
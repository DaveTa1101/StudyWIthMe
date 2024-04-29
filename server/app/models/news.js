const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	title: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	topic: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	author: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	difficulty: {
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
	createdAt: {
		type: Date,
		default: Date.now,
	},
	imagesURL: {
		type: String,
	},
	user_id: [
		{
			ref: 'user',
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	],
	categories: {
		type: Array,
		default: [],
	},
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
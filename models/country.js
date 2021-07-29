const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	capital: {
		type: String,
		required: true
	},
	population: {
		type: Number,
		required: true,
		default: false
	},
})

module.exports = mongoose.model('Country', countrySchema);
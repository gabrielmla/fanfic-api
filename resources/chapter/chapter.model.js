var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChapterSchema = new Schema({
	title: {
		type: String,
		required: true,
		maxlength: 40
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
  notes: {
    type: String,
    maxlength: 140
  },
  text: {
    type: String,
    required: true
  },
	words: {
		type: Number
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

var Chapter = mongoose.model('Chapter', ChapterSchema);

module.exports = Chapter;

var mongoose = require("mongoose");

var schema = mongoose.Schema;

var noteSchema = new schema({
	headlineId: {
		type: schema.Types.ObjectId,
		ref: "Headline"
	},
	date: String,
	noteText:String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	cloudinaryId: {
		type: String,
		required: true,
	},
	caption: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	//an array of the ids of all of the comments on the post
	
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Post", PostSchema);


//post collection that takes in id, image, likes, caption created by and deleted
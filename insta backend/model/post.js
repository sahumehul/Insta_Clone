const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name : {type: String},
    location: {type: String},
    likes :{type: Number},
    description: {type: String},
    PostImage:{type: String},
    Date:{type: String}
})

const postModel = mongoose.model("Post",postSchema);

module.exports = postModel;
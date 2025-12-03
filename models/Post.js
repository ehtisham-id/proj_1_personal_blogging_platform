const PostSchema = require('../schema/PostSchema.js');
const mongoose = require('mongoose');

const Post = mongoose.model('Post', PostSchema);

module.exports =  Post;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title: {
        type : String,
        required: true
    },
    author: {
        type : String,
        required: true
    }
})
const Blog  = mongoose.model('Blog',blogSchema);
module.exports=Blog;
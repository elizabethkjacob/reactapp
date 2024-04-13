const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    pos:String,
    display: String
});

const dataModel = mongoose.model('post', schema);
module.exports = dataModel;

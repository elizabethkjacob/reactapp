const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Username:String,
    Email:String,
    Password:String
});

const authModel = mongoose.model('user',schema);
module.exports = authModel;
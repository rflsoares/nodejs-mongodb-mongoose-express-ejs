const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web-app');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    firstName: String,
    lastName: String
}, { collection: 'users' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }
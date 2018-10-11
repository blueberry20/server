const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//this line equals to a line above
const {Schema} = mongoose;


//Schema in mongoose wants us to choose which props we will have in advance
const userSchema = new Schema({
    googleId: String
})

//we want to create a new collection called 'users'
//that loads schema into mongoose
mongoose.model('users', userSchema);
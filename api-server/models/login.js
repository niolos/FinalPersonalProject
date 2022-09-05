const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let admins = new Schema({userName:{type:String}, password:{type:String} })

module.exports = mongoose.model('admins', admins)
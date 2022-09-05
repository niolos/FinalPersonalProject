const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let subscribers = new Schema({fName:{type:String}, lName:{type:String}, alias:{type:String}, email:{type:String},phoneNumber:{type:Number}, dob:{type:String} })

module.exports = mongoose.model('subscribers', subscribers)
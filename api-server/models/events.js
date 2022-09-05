const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let events = new Schema({eventImg:{type:String}, eventName:{type:String}, eventDate:{type:String}, location:{type:String}, description:{type:String}, cost:{type:Number}, status:{type:String} })

module.exports = mongoose.model('events', events)
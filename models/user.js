var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var unique = require("mongoose-unique-validator");
//var Message = require('../models/message');
var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

schema.plugin(unique);

module.exports = mongoose.model("User", schema);

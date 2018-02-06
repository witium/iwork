var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var OwnerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  alias: String,
  address: {
    type: String,
    required: true
  },
  licence: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  tax: {
    type: String,
    required: true
  },
  bank: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  telephone: String,
  capital: Number,
  foundAt: Date,
  legal: String,
  description: String,
  logo: String,
  attachments: [{location: String}]
},
{
  timestamps: true
});

module.exports = mongoose.model('Owner', OwnerSchema);
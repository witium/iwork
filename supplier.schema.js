var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var SupplierSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  alias: String,
  avatar: String,
  area: String,
  address: String,
  zipcode: Number,
  fax: String,
  telephone: String,
  grade: String,
  industry: String,
  source: String,
  size: String,
  hidden: Boolean,
  creater: ObjectID,
  follower: ObjectID,
  tags:[{tag: String}],
  description: String,
  attachments: [{location: String}]
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Supplier', SupplierSchema);
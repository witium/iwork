var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var RoleSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  icon: String,
  description: String,
  hidden: {
    type: Boolean,
    required: true
  },
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Role', RoleSchema);
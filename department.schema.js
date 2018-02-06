var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var DepartmentSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  icon: String,
  description: String,
  hidden: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Department', DepartmentSchema);
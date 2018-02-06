var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phones: [{phone: String}],
  wechat: String,
  qq: String,
  card: String,
  marriage: Boolean,
  origin: String,
  address: String,
  degree: String,
  major: String,
  education: String,
  experience: String,
  skills: String,
  hidden: Boolean,
  status: String,
  emergencyContact: String,
  emergencyPhone: String,
  relationship: String
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Employee', EmployeeSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  avatar: String,
  phones: [{phone: String}],
  company: String,
  post: {
    type: String,
    required: true
  },
  birthday: Date,
  email: String,
  wechat: String,
  qq: String,
  role: String,
  hidden: Boolean,
  remark: String,
  attachments: [{file: String, location: String}]
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Contact', ContactSchema);
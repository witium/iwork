var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var LeaveSchema = new Schema({
  approveType: {
    type: String,
    required: true
  },
  startAt: {
    type: Date,
    required: true
  },
  endAt: {
    type: Date,
    required: true
  },
  leaveDays: {
    type: Number,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  leaders: [{leader: ObjectId}],
  others: [ {colleague: ObjectId}],
  attachments: [{location: String}],
  status: {
    type: String,
    required: true
  },
  comments: [{body: String, date: Date}]
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Leave', LeaveSchema);
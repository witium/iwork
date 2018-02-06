import { ObjectID } from '../../../Library/Caches/typescript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var ExpenseSchema = new Schema({
  expenseDate: {
    type: Date,
    required: true
  },
  expenseType: {
    type: String,
    required: true
  },
  expense: {
    type: Number,
    required: true
  },
  quanity: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  participants: [{participant: String}],
  leaders: [{leader: ObjectId}],
  colleagues: [{colleague: ObjectId}],
  status: {
    type: String,
    required: true
  },
  remark: String,
  comments: [{content: String, createAt: Date}],
  attachments: [{location: String}]
},
{
    timestamps: true
});
  
module.exports = mongoose.model('Expense', ExpenseSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema({
  question: String,
  active: { type: Boolean, default: false },
  done: { type: Boolean, default: false },
  responses: [],
  created_at: Date,
  updated_at: Date
});

// TODO: factorize
voteSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
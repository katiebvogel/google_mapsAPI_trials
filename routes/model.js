var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {type: String, required: true},
  gender: {type: String, required: true},
  age: {type: Number, required: true},
  favlang: {type: String, required: true},
  location: {type: [Number], required: true}, //[Long, Lat]
  htmlverified: String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});  //end UserSchema

//Sets the created_at parameter equal to the current time

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now
  }
  next();
}); //end UserShcema.pre

//you need the following code for running proximity searches

UserSchema.index({location:'2dsphere'});

//exports

module.exports = mongoose.model('scotch-user', UserSchema);

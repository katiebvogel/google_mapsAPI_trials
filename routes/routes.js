//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var User = require('./model.js');

//Opens App Routes
module.exports = function(app) {

  //Get Routes
  // -----------------
  //REtrive records for all users in the db
  app.get('/users', function(request, response){
    //Uses the Mongoose schema to run the search (empty conditions)
    var query = User.find({});
    query.exec(function(err, users){
      if(err){
        response.send(err);
      } else {
        //if no errors are found, it responds with a JSON of all users
        response.json(users);

      }
    }); //end query.exec
  }); //end app.get

//Post ROUTES //
//------------------
//Provides a method for saving users in the DB
app.post('/users', function(request, response){
  //creates a new user based on Mongoose schema and the post body
  var newuser = new User(request.body);

  //new user is saved in the DB
  newuser.save(function(err){
    if(err) {
      response.send(err);
    }else {
      //if no errors are found, it responds with a json of the new user
      response.json(request.body);
      console.log("here is the request body", request.body);
    }
  });  //end newuser.save
}); //end app.post

};  //end module.exports function

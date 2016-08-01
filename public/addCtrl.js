//creates the addCtrol Module and Controller.  Notes that is depend on the 'geolocation' module and service

var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);
addCtrl.controller('addCtrl', function($scope, $http, $rootScope, geolocation, gservice){

///  Initialize Variables

$scope.formData = {};
var coords = {};
var lat = 0;
var long = 0;

//Set initial coordinates to the center of the US.
$scope.formData.latitude = 39.500;
$scope.formData.longitude = -98.350;

// Get User's actual coordinates based on HTML5 at window load
geolocation.getLocation().then(function(data){

    // Set the latitude and longitude equal to the HTML5 coordinates
    coords = {lat:data.coords.latitude, long:data.coords.longitude};

    // Display coordinates in location textboxes rounded to three decimal points
    $scope.formData.longitude = parseFloat(coords.long).toFixed(3);
    $scope.formData.latitude = parseFloat(coords.lat).toFixed(3);

    // Display message confirming that the coordinates verified.
    $scope.formData.htmlverified = "Yep (Thanks for giving us real data!)";

    gservice.refresh($scope.formData.latitude, $scope.formData.longitude);

});
//functions

//Get coordinates based on mouse click.  When a click event is detected:
$rootScope.$on("clicked", function(){

    // run the gservice functions associated with identifying coordinates
    $scope.$apply(function(){
      $scope.formData.latitude = parseFloat(gservice.clickLat).toFixed(3);
      $scope.formData.longitude = parseFloat(gservice.clickLong).toFixed(3);
      $scope.formData.htmlverified= "Nope";
    }); //end scope.apply
}); //end rootScrope clicked function


//creates a new user based on the form input fields
$scope.createUser = function() {
  //grabs all the text box fields
  var userData = {
    username: $scope.formData.username,
    gender: $scope.formData.gender,
    age: $scope.formData.age,
    favlang: $scope.formData.favlang,
    location: [$scope.formData.longitude, $scope.formData.latitude],
    htmlverified: $scope.formData.htmlverified
  };  // end userData object

  //Save the user data to the DB!
    $http.post('/users', userData).success(function(data) {
      console.log(userData);
    //once the function is complete, clear the form (except for location)
    $scope.formData.username = "";
    $scope.formData.gender = "";
    $scope.formData.age = "";
    $scope.formData.favlang = "";

    gservice.refresh($scope.formData.latitude, $scope.formData.longitude);
  }) //end $http.post success  No ; after because we chain .error next
  .error(function (data){
    console.log('Error: ', data);
  }); //end .error
}; //end $scope.createUser

}); //end addCtrl.controller

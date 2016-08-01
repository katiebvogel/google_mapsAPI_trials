
//We've added a libraries parameter (on index.html).  Here we are creating a DrawingManager
//declares the initial angular module "mapApp".  Module grabs other controllers and service
var app = angular.module('MeanMapApp', ['addCtrl', 'geolocation', 'gservice']);

// angular.module('MeanMapApp').controller('MainController', function($http){
//
//   var vm = this;
//
//   vm.message = 'Maps are the best!';
//
//   vm.initMap = function(){
//     var sendData = {};
//     sendData.task = vm.tempTask;
//
//   vm.map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 44.9778, lng: -93.2650},
//       zoom: 8
//     });
//   }
//
//
// var drawingManager = new google.maps.drawing.DrawingManager({
//   drawingMode: google.maps.drawing.OverlayType.MARKER,
//   drawingControl: true,
//   drawingControlOptions: {
//     position: google.maps.ControlPosition.TOP_CENTER,
//     drawingModes: [
//       google.maps.drawing.OverlayType.MAKER,
//       google.maps.drawing.OverlayType.POLYLINE
//     ]
//   },
//   markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}
//
// });
// drawingManager.setMap(vm.map);
//
//
// drawingManager.setOptions({
//   drawingControl: true
// });
//
// });  //end conroller

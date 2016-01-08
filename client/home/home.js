angular.module('jaguarTask.home', [])

.controller('HomePageController', function($scope, $location){
  $scope.routeToMain = function(){
    console.log("routeToMain click");
    //$location.path('main');
    };
});
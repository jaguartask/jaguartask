angular.module('jaguarTask.simple', [])

.controller('simpleCtrl', function($scope, listFactory){
  $scope.msg = "this is from $scope";
  $scope.msg2 = listFactory.factoryMsg;
})

.factory('listFactory', function(){
  return {
    factoryMsg: "this is from the factory"
  }
})
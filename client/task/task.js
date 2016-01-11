angular.module('jaguarTask.task', [])

.controller("taskController", ['$scope', '$location', function($scope, $location){
  $scope.task = {
      id: 2,
      name: 'task list 2',
      tasks: [{
        id: 03,
        name: 'work out',
        notes: 'all day',
        priority: 'high',
        dueDate: "1/7/2015",
        created: "1/6/2015",
        done: true
      }]
    }; //TODO: switch for real task data, which
  //could ideally be stored on factory/service or at least referenced in the state params/search
  $scope.msg = "Welcome to the task controller";
  $scope.basicTaskKeys = ["notes","done",  "created", "dueDate", "priority"];
  
}]);
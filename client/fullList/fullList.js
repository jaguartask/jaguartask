angular.module('jaguarTask.list', [])

.controller("listController", ['$scope', '$location', function($scope, $location){
  $scope.list = {
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
      },{
        id: 04,
        name: 'sleep',
        notes: 'all night',
        priority: 'low',
        dueDate: "1/10/2015",
        created: "1/14/2015",
        done: false
      }
      ]
    }; 

  $scope.msg = "Welcome to the list controller";
  $scope.basicTaskKeys = ["notes","done",  "created", "dueDate", "priority"];
  $scope.appliedClass= function(elt, prop){
    var className = elt + "_" + prop;
    return className;
  };

}]);

angular.module('jaguarTask.home', [])

.controller('HomePageController', function($scope){
	$scope.dummyData = [
    {
      id: 1,
      name: 'task list 1',
      tasks: [{
        id: 01,
        name: 'get milk',
        notes: '2%',
        priority: 'medium',
        dueDate: "1/7/2015",
        created: "1/6/2015",
        done: false
      }]
    }, {
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
    }];
  $scope.currentListData = $scope.dummyData[1];
  $scope.basicTaskKeys = ["done", "dueDate", "priority"];
  
});
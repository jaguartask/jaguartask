angular.module('jaguarTask.test', [])

.controller('testController', function($scope, testListsFactory, $http) {
	$scope.lists = testListsFactory.getLists();
	testListsFactory.add({name: 'test1', tasks: ['task1', 'task2']});

	$scope.displayTasks = function(index) {
		$scope.tasks = $scope.lists[index];
		$scope.index = index;
	}

	$scope.addTask = function(index, task) {
		testListsFactory.addTask($scope.index, task);
		$scope.task = '';
	}

	$scope.createList = function(listName) {
		testListsFactory.add({name:listName});
		$scope.listName = '';
	};
	$scope.deleteList = function(index) {
		testListsFactory.deleteList(index);
	}
})

.factory('testListsFactory', function(){
	var lists = [];
	var add = function(list){
		lists.push(list);
	}
	var getLists = function(){
		return lists;
	};
	var getTasks = function(index) {
		return lists[index];
	}

	var addTask = function(index, name, details, lowPriority) {
		lists[index].tasks = lists[index].tasks || [];
		var newTaskPriority = "high";
		if( lowPriority.checked ){
			newTaskPriority= "low"
		};
		var newTask = {
			name: name,
			details: details,
			priority: newTaskPriority
		}
		lists[index].tasks.push(name);
		$http.post('/api/task', newTask); //TODO: verify this api is right
																			//and sends proper obj (including create date)
	}

	var deleteList = function(index) {
		lists.splice(index, 1);
	}

	return {
		add: add,
		getLists: getLists,
		addTask: addTask,
		deleteList: deleteList
	}

});
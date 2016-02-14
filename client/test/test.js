angular.module('jaguarTask.test', [])

.controller('testController', function($scope, testListsFactory) {
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

  var addTask = function(index, task) {
    lists[index].tasks = lists[index].tasks || [];
    lists[index].tasks.push(task);
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

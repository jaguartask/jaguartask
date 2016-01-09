angular.module('jaguarTask.login', [])

.controller('LoginController', function($scope, $http, store, $state){
  $scope.user = {};

  $scope.login = function() {
    $http({
      url: '/auth/login',
      method: 'POST',
      data: $scope.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('main');
    }, function(error) {
      alert(error.data);
    });
  }
});
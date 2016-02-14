angular.module('jaguarTask.register', [])

.controller('RegisterController', function($scope, $http, store, $state){
  $scope.user = {};

  $scope.register = function() {
    $http({
      url: 'auth/signup',
      method: 'POST',
      data: $scope.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('home');
    }, function(error) {
      alert(error.data);
    });
  }
});

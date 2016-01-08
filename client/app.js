angular.module('jaguarTask', [
	'ui.router',
	'jaguarTask.home',
  'jaguarTask.main'
])
.config(function($stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.when('', '/home/index');
  $urlRouterProvider.when('/', '/home/index');
  //unmatch path return to homepage
  $urlRouterProvider.otherwise('/home/index');

  $stateProvider
  	.state('homepage', {
    	url: '/home',
    	templateUrl: 'home/home-partial.html',
    	controller: 'HomePageController',
  	})
  	.state('homepage.index', {
  		url: '/index',
      templateUrl: 'home/home-index-partial.html'
  	})
    .state('homepage.login', {
      url: '/login',
      templateUrl: 'home/home-login-partial.html'
    })
    .state('homepage.register', {
      url: '/register',
      templateUrl: 'home/home-register-partial.html'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: 'MainController'
    })
})
.run(function($rootScope){
    $rootScope.$on('$viewContentLoaded', function(event, next) {
        componentHandler.upgradeAllRegistered();
    });
});

angular.module('jaguarTask', [
	'ui.router',
	'jaguarTask.home',
  'jaguarTask.main',
  'jaguarTask.list',
  'jaguarTask.login',
  'jaguarTask.register',
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
      templateUrl: 'login/login-partial.html',
      controller: 'LoginController',
    })
    .state('homepage.register', {
      url: '/register',
      templateUrl: 'register/register-partial.html',
      controller: 'RegisterController',
    })
    .state('main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: 'MainController'
    })
    .state('list', {//'main.list'
      url: '/list',
      templateUrl: 'fullList/fullList.html',
      controller: 'listController'
    })
})
.run(function($rootScope){
    $rootScope.$on('$viewContentLoaded', function(event, next) {
        componentHandler.upgradeAllRegistered();
    });
});

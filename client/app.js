angular.module('jaguarTask', [
	'ui.router',
  'angular-jwt',
  'angular-storage',
	'jaguarTask.home',
  'jaguarTask.main',
  'jaguarTask.list',
  'jaguarTask.login',
  'jaguarTask.register',
  'jaguarTask.jtapp'
])
.config(function($stateProvider, $urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
	
  $urlRouterProvider.when('', '/home/index');
  $urlRouterProvider.when('/', '/home/index');
  $urlRouterProvider.when('/app', '/app/main');
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
    .state('app', {
      url: '/app',
      templateUrl: 'jtapp/jtapp-partial.html',
      controller: 'AppPageController',
      data: {
        requiresLogin: false //set to false to make route accessible to everyone
      }
    })
    .state('app.main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: 'MainController',
      data: {
        requiresLogin: false //set to false to make route accessible to everyone
      }
    })
    .state('app.list', {//'main.list'
      url: '/list',
      templateUrl: 'fullList/fullList.html',
      controller: 'listController',
      data: {
        requiresLogin: false //set to false to make route accessible to everyone
      }
    });

  // gets jwt token from local storage
  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('jwt');
  }

  $httpProvider.interceptors.push('jwtInterceptor');
})
.run(function($rootScope, $state, store, jwtHelper){
    $rootScope.$on('$viewContentLoaded', function(event, next) {
      componentHandler.upgradeAllRegistered();
    });
    $rootScope.$on('$stateChangeStart', function(e, to) {
      if (to.data && to.data.requiresLogin) {
        if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
          e.preventDefault();
          $state.go('homepage.login');
        }
      }
    });
});

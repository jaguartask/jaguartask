angular.module('jaguarTask', [
	'ui.router',
	'jaguarTask.HomePageController',
])
.config(function($stateProvider, $urlRouterProvider) {
	//illegal path return to homepage
  $urlRouterProvider.otherwise('/index');

  $stateProvider
  	.state('homepage', {
    	url: '/',
    	templateUrl: 'home/home-partial.html',
    	controller: 'HomePageController'
  	})
  	.state('homepage.index', {
  		url: '/'
  	})
});
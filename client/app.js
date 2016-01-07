angular.module('jaguarTask', [
	'ui.router',
	'jaguarTask.HomePageController',
])
.config(function($stateProvider, $urlRouterProvider) {
	//illegal path return to homepage
  $urlRouterProvider.otherwise('/');

  $stateProvider
  	.state('homepage', {
    	url: '/',
    	templateUrl: 'home/home-partial.html',
    	controller: 'HomePageController'
  	})
});
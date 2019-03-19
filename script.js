	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope





scotchApp.service('formService',function(){
		var formData = [];

			this.setValues = function(a,b){
				formData.push(a);
				formData.push(b);
				// return formData;
				console.log(formData);
			}
			this.getValues = function(){return formData	}
});
	scotchApp.controller('mainController', function($scope,$location,formService) {
		// var a = ;
		// var b = $scope.last;

		// console.log(a);
				$scope.saveValues = function(){
					formService.setValues($scope.first,$scope.last);
						$location.path('/about');
				}



				$scope.secondValues = function(a,b){
					formService.setValues($scope.t1,$scope.t2);
						$location.path('/contact');
				}
		// $scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('contactController', function($scope,formService) {
		// create a message to display in our view
		$scope.values = formService.getValues();
		// alert($scope.values);
	});

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/barnyard', {
            templateUrl: '/views/templates/barnyard.html',
            controller: 'barnyardController'
        })
        .when('/horse', {
            templateUrl: '/views/templates/horse.html',
            controller: 'horseController'
        })
        .when('/pig', {
            templateUrl: '/views/templates/pig.html',
            controller: 'pigController'
        })
        .when('/shelters', {
            templateUrl: '/views/templates/shelters.html',
            controller: 'sheltersController'
        })
        .otherwise({
            redirectTo: 'horse'
        });
}]);
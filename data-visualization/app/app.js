var app = angular.module('graphApp', ['ngRoute','firebase'])
.constant('FIREBASE_URL', 'https://tester-zxczxc.firebaseio.com/');


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/graph',{
        templateUrl: 'partials/graph.html',
        controller: 'graphController'
    })
    .when('/login',{
        templateUrl: 'partials/login.html',
        controller: 'registration'
    })
    .when('/register',{
        templateUrl: 'partials/register.html',
        controller: 'registration'
    })
    .otherwise({
        redirectTo: '/login'
    });
}]);

















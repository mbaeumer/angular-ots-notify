angular.module('controllers',[]);
angular.module('services',[]);
angular.module('directives',[]);

//, 'ngTouch', 'angucomplete-alt'
angular.module('app', ['controllers','ngRoute','services','ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html', controller: 'appController'}).
            when('/notify', {templateUrl: 'partials/home.html', controller: 'appController'}).
            otherwise({
                redirectTo : '/home'
            });
    }]);

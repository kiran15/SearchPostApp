'use strict';

/**
 * @ngdoc overview
 * @name searchAppApp
 * @description
 * # searchAppApp
 *
 * Main module of the application.
 */
angular
    .module('searchAppApp', [
        'ngCookies',
        'ngResource',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                name: 'login',
                templateUrl: 'views/login.tpl.html',
                controller: 'loginController',
                controllerAs: 'login'
            })
            .when('/home', {
                name: "home",
                templateUrl: 'views/home.tpl.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/post', {
                name: 'post',
                templateUrl: 'views/post.tpl.html',
                controller: 'postController',
                controllerAs: 'post'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });

angular.module('searchAppApp')
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(scope, current, pre) {
            // how to get current route name, e.g. /aaa or /bbb
            // console.log('Current route name: ' + JSON.stringify(current));
            $rootScope.currentPath = JSON.parse(JSON.stringify(current)).$$route.name;
        })
    }]);
/**
 * Created by jiangyukun on 2015/1/26.
 */

angular.module('routeTest', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'views/list.html'
            })
            .when('/list:id', {
                templateUrl: 'views/detail.html'
            })
            .when('/routeA', {
                templateUrl: 'views/routeA.html'
            })
            .otherwise({
                redirectTo: '/list'
            });
    }])
    .controller('routeController', function () {

    });

/**
 * Created by jiangyukun on 2015/1/23.
 */

var appModule = angular.module('app', [])
    .directive('hello', function () {
        return {
            restrict: 'E',
            template: '<div><span ng-transclude></span>Hi there</div>',
            replace: true,
            transclude: true
        };
    }).
    controller('MyController', function ($scope) {
        $scope.things = [1, 2, 3, 4, 5, 6];
    });

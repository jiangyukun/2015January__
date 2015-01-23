/**
 * Created by jiangyukun on 2015/1/22.
 */

angular.module('myApp', [])
    .filter('greet', function () {
        return function (name) {
            return name + 'a';
        }
    })
    .service('book', function ($rootScope) {
        return {
            name: 'service',
            addBook: function () {
                $rootScope.$broadcast('update');
            }
        };
    })
    .controller('c1', function ($scope, book) {
        console.log('controller');
        $scope.ccc = 'cc';
        $scope.bind = 'bind';
        $scope.service = book.name;
        $scope.books = ['aaa', 'bbb', 'ccc'];
        $scope.active = function (name) {
            $scope.ccc = 'ccc';
        }
    })
;
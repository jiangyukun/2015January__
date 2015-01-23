/**
 * Created by jiangyukun on 2015/1/23.
 */

angular.module('test', [])
    .directive('accordion', function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<div ng-transclude></div>',
            controller: function () {
                var books = [], firstShowed = false;
                this.addBook = function (book) {
                    if (!firstShowed) {
                        book.show = true;
                        firstShowed = true;
                    }
                    books.push(book);
                };
                this.show = function (currentBook) {
                    angular.forEach(books, function (book) {
                        if (currentBook != book) {
                            book.show = false;
                        }
                    });
                }
            }
        };
    })
    .directive('test', function () {
        return {
            restrict: 'E',
            transclude: true,
            require: '^accordion',
            replace: true,
            scope: {
                name: '=testHead',
                des: '=testDes'
            },
            template: '<div><div class="head" ng-click="toggle()">{{name}}</div><div ng-show="show">{{des}}</div></div>',
            link: function (scope, element, attrs, accordionController) {
                accordionController.addBook(scope);
                scope.toggle = function () {
                    scope.show = true;
                    accordionController.show(scope);
                }
            }
        };
    })
    .controller('testController', function ($scope) {
        $scope.books = [{
            name: 'AAA',
            description: 'description'
        }, {
            name: 'BBB',
            description: 'xxxx'
        }];
    });

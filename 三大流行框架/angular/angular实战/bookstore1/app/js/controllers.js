/**
 * Created by Administrator on 2016/12/29.
 */

var bookCtrls=angular.module('bookCtrls',[]);

myApp.controller('helloCtrl',["$scope",function ($scope) {
    $scope.sayHi = "hello,angular";

}]);

myApp.controller('mybooks',["$scope",function ($scope) {
    $scope.books=[
        {title:'ECMAjavascript',dueto:'javascript'},
        {title:'DOM',dueto:'javascript'},
        {title:'BOM',dueto:'javascript'}
    ]
}]);


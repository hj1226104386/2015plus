/**
 * Created by Administrator on 2016/12/29.
 */
var app = angular.module("myApp",[]);
app.controller("myController",["$scope",function ($scope) {
    $scope.userInfo = {
        username:'我是ICE',
        password:'19921027',
        autologin:true
    };
    $scope.test=function () {
        console.log($scope.userInfo);
    };
    $scope.reset=function () {
        $scope.userInfo = {
            username:'我是ICE',
            password:'19921027',
            autologin:true
        };
    }
}]);
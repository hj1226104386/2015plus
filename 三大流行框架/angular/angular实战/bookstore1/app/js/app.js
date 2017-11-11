/**
 * Created by Administrator on 2016/12/29.
 */
var myApp = angular.module('myApp', ['ngRoute', 'bookCtrls']);

//配置路由
myApp.config(function ($routeProvider) {
    $routeProvider.when('/sayHi', {
        templateUrl: 'tpls/sayHi.html',
        controller: 'helloCtrl'
    })
        .when('/myBooks', {
            templateUrl: 'tpls/myBooks.html',
            controller: 'mybooks'
        })
        .otherwise({
            redirectTo:'/sayHi'
        })
})
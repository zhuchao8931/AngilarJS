/**
 * Created by zhuchao on 2017/1/1.
 */

var app = angular.module("myApp", []);
app.controller("MyController", function ($scope) {
    $scope.today = "2014-12-01";
    $scope.isCapitalized=function (str) {
        return str[0]==str[0].toUpperCase();
    }
})

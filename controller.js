var app = angular.module('redditApp');

app.controller('redditCtrl', function($scope, $http, myfactory){

$scope.getHttpData = function (){
    $scope.http = myfactory.getData();
    $scope.http.then(function(response){
      $scope.posts = response.data.data.children;
      console.log($scope.posts);

    }, function (error) {
      console.log(error);
    });
  }
  $scope.getHttpData();

  $scope.favorites = [];




});
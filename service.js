var app = angular.module('redditApp');

app.factory('myfactory', function($http){
console.log('service check');

var obj = {};
obj.getData = function () {
  return $http.get('https://www.reddit.com/r/EarthPorn/top/.json');
  }
  return obj;


});

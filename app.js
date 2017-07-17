var app = angular.module('redditApp', ['ngRoute']);
app.config(function($routeProvider){

  $routeProvider.when("/feed",{
    templateUrl: "views/feed.html"
  });

  $routeProvider.when("/favorites", {
    templateUrl: "views/favorites.html"
  })
  .otherwise({redirectTo:'/feed'});
});

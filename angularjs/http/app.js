var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope","$http", function($scope, $http){
  $scope.posts = [];
  $http.get("https://jsonplaceholder.typicode.com/posts")
  .then(function(success){
    console.log(success);
    $scope.posts = success.data;
  }, function(error){

  });
}]);

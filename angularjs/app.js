var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", function($scope){
  $scope.nombre = "Esteban";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "codigofacilito"
    },
    {
      comentario: "Malisimo el tutorial",
      username: "otro_usuario"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
}]);

var app = angular.module('app');
app.controller('pandaController', ['$scope', '$location', 'pandasFactory', function($scope, $location, pandasFactory){
  $scope.pandas = {};
  var index = function(){
    pandasFactory.index(function(data){
      console.log('data is ', data);
      $scope.pandas = data;
    })
  }
  index();

  $scope.createPanda = function(){
    pandasFactory.create($scope.panda, function(data){
      $location.url('/');
      index();
    })
  }

  $scope.editPanda = function(id){
    $location.url('/edit/' + id);
  }

}])

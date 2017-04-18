// var app = angular.module('app');
app.controller('FriendsController', ['$scope', '$location', '$routeParams', 'friendFactory', function($scope, $location, $routeParams, friendFactory){
  // $scope.friends = data;
  $scope.newFriend = {};
  var index = function(){
    friendFactory.index(function(data){
      $scope.friends = data.data;
      // console.log('data is ', data.data);
    })
  }
  index();

  $scope.createFriend = function(){
    friendFactory.create($scope.newFriend, function(data){
      $location.url('/friends');
      index();
    })
  }

  $scope.editFriend = function(id){
    $location.url('/friends/edit/' + id);
  }
  // $scope.test = 'test string';
  $scope.friend = {};
  $scope.showFriend = function(id){
    $location.url('/friends/' + id);
    friendFactory.show(id, function(data){
      $scope.friend = data;
      console.log(data);
    })
  }

  // friendFactory.show($routeParams.id, function(returnedData){
  //     $scope.friend = returnedData;
  //     // console.log($scope.friend);
  //   });

  $scope.updateFriend = function(id){
    $location.url('/friends');
    index();
  }

  $scope.deleteFriend = function(id){
    friendFactory.delete(id, function(data){
      $location.url('/friends');
      index();
    })
  }

}])

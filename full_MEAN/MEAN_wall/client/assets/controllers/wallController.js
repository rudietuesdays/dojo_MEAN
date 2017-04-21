app.controller('wallController', ['$scope', '$location', '$cookies', '$routeParams', 'userFactory', 'messageFactory', 'commentFactory', function($scope, $location, $cookies, $routeParams, userFactory, messageFactory, commentFactory){

  console.log('wall controller loaded');

  $scope.users = {};

  var index = function(){
    var cookies = $cookies.getAll();
    // console.log('cookies: ', cookies);
    if (!('uid' in cookies)){
      $location.url('/')
      console.log('user not logged in');
    } else {
      var userCookie = $cookies.get('uid');
      // console.log(userCookie);
      var showUser = function(id){
        userFactory.show(id, function(data){
          $scope.user = data.data;
          // console.log('data is:', data.data);
        })
      }

      var showMessages = function(){
        messageFactory.show(function(data){
          $scope.messages = data.data.messages;
          // console.log('all the messages:', data.data.messages);
        });
      }

      var showComments = function(){
        commentFactory.show(function(data){
          $scope.comments = data.data.comments;
          // console.log('all the comments:', data.data.comments);
        });
      }

      showUser(userCookie);
      showMessages();
      showComments();

      // messageFactory.show();
      // commentFactory.show()
    }
  }

  index();


  $scope.logoutUser = function(){
    var cookies = $cookies.getAll();
    angular.forEach(cookies, function (v, k) { $cookies.remove(k); });
    $location.url('/');
  }

  $scope.createMessage = function(id){
    messageFactory.create(id, $scope.message, function(data){
      if (data.data.errors){
        // console.log(data.data);
        $scope.message_errors = data.data.errors.message;
      } else {
        $scope.message_errors = ""
        console.log(data);
      }
    })
    index()
    $scope.message = {};
  }

  $scope.newComment = {};
  $scope.createComment = function(message_id, user_id, ind){
    // console.log($scope.newComment[ind].content);
    $scope.newComment[ind]._user = user_id;
    console.log($scope.newComment[ind]);
    commentFactory.create(message_id, user_id, $scope.newComment[ind], function(data){
      if (typeof(data) == 'array'){
        $scope.comments = data;
        console.log(data);
      } else {
        // console.log(data);
      }

    })
    index();
    $scope.newComment = {}
  }

}])

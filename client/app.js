angular.module('mvp', [
  'ui.router',
  'mvp.newpost',
  'mvp.posts'
  ])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('posts', {
      templateUrl: 'client/posts/posts.html',
      url: '/posts',
      controller: 'PostsController'
    })
    .state('newpost', {
      templateUrl: 'client/newpost/newpost.html',
      url: '/newpost',
      controller: 'NewPostController'
    })


    $urlRouterProvider.otherwise('/');

})

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);


// .controller('MainCtrl', [
//   '$scope',
//   function($scope){

//    $scope.posts = [
//    ];

//    // $scope.addPost = function() {
//    //  $scope.posts.push({title: $scope.title, upvotes: 0 });
//    // };

//    $scope.incrementUpVotes = function(post) {
//     post.upvotes++;
//    };

//   }

// ]);

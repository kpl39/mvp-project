angular.module('mvp.newpost', [])

.controller('NewPostController', function($scope, $stateParams, posts, Posts) {

  $scope.posts = posts.posts;

  $scope.post = posts.posts[$stateParams.id];

   // $scope.addPost = function() {
   //  $scope.posts.push({
   //    title: $scope.title,
   //    body: $scope.body,
   //    upvotes: 0,
   //    comments: []
   //  });
   // };

   $scope.addPost = function() {
    Posts.addOne({
      title: $scope.title,
      body: $scope.body,
      upvotes: 0,
      comments: []
    });
  }


})
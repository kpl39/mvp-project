angular.module('mvp.newpost', [])

.controller('NewPostController', function($scope, $stateParams, posts) {

  $scope.posts = posts.posts;

  $scope.post = posts.posts[$stateParams.id];

   $scope.addPost = function() {
    $scope.posts.push({
      title: $scope.title,
      body: $scope.body,
      upvotes: 0
    });
   };



})
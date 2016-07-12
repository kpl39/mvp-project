angular.module('mvp.comments', [])

.controller('CommentsController', function($scope, $stateParams, posts) {
  $scope.posts = posts.posts;

  $scope.post = posts.posts[$stateParams.id]

  $scope.addComment = function(){
    $scope.post.comments.push({
      body: $scope.commentbody,
      author: $scope.author
    })
  }


})
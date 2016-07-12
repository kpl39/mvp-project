angular.module('mvp.comments', [])

.controller('CommentsController', function($scope, $stateParams, posts) {
  $scope.posts = posts.posts;

  $scope.post = posts.posts[$stateParams.id]
  $scope.id = $stateParams.id

})
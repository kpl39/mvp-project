angular.module('mvp.newpost', [])

.controller('NewPostController', function($scope, posts) {

  $scope.posts = posts.posts;


   $scope.addPost = function() {
    $scope.posts.push({title: $scope.title, upvotes: 0 });
   };

})
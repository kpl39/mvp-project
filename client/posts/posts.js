angular.module('mvp.posts', [])

.controller('PostsController', ['$scope', 'posts', function($scope, posts){

   $scope.posts = posts.posts;

   $scope.incrementUpVotes = function(post) {
    post.upvotes++;
   };

  }

]);

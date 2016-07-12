angular.module('mvp.posts', [])

.controller('PostsController', function($scope, posts){

   $scope.posts = posts.posts;


   $scope.incrementUpVotes = function(post) {
    post.upvotes++;
   };



  }
);

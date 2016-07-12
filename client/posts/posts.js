angular.module('mvp.posts', [])

.controller('PostsController', function($scope, posts, Posts){

   $scope.posts = posts.posts;

   $scope.data = {};

   $scope.getPosts = function () {
      Posts.getAll()
        .then(function (posts) {
          console.log("posts here" + posts[0].title);
          $scope.posts = posts;
        });
    };

   $scope.incrementUpVotes = function(post) {
    post.upvotes++;
   };

   $scope.getPosts();
});

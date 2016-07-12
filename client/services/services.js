angular.module('mvp.services', [])

.factory('Posts', function($http) {

  return {
    getAll: function () {
      console.log('getAll')
      return $http({
        method: 'GET',
        url: '/posts'
      })
      .then(function(post) {
        return post.data;
      }).catch(function (err) {
        throw err;
      });
    },
    addOne: function (data) {
      console.log(data);
      return $http({
        method: 'POST',
        url: '/posts',
        data: data
      });
    }
  };
})

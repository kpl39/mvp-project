angular.module('mvp', [
  'ngRoute'
  ])

.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test ='Hello world!';
  }
]);

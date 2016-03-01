angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {



  })

  .controller('HomeTabCtrl', function($scope) {
    console.log('HomeTabCtrl');
  })

  .controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
  })

  .controller('SessionCtrl', function($scope, $stateParams, Session) {
    $scope.session = Session.get({sessionId: $stateParams.sessionId});
  });



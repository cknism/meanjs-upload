'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('money', {
          url: '/money',
          templateUrl: 'modules/money/client/views/money-create.client.view.html'
      });
  }
]);

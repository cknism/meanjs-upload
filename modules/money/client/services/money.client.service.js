'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('money').factory('Money', ['$resource',
  function ($resource) {
    return $resource('api/money/:moneyId', {
      moneyId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

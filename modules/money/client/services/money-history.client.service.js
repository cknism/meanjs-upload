'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('money').factory('MoneyHistory', ['$resource',
    function ($resource) {
        return $resource('api/money/history/:moneyId', {
            moneyId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

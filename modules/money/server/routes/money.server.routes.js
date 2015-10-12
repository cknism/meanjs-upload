'use strict';

/**
 * Module dependencies.
 */
var moneyPolicy = require('../policies/money.server.policy'),
  money = require('../controllers/money.server.controller');

module.exports = function (app) {
  app.route('/api/money/history').all(moneyPolicy.isAllowed)
      .get(money.historyList)
      .post(money.historyCreate);

  app.route('/api/money/history/:historyId').all(moneyPolicy.isAllowed)
      .get(money.historyRead)
      .put(money.historyUpdate)
      .delete(money.historyDelete);

  app.param('historyId', money.historyByID);
};

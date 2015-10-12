'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Money',
      state: 'money'
    });
  }
]);

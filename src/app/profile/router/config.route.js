/**
 * Router Factory
 * @desc Router to controller for home
 * @namespace home
 * @returns {object} state
 */
(function() {
  'use strict';

  angular
    .module('app.profile')
    .run(appRun);

  appRun.$inject = ['routerHelper']

  /* @ngInject */
  function appRun(routehelper) {
    routehelper.configureStates(getStates(), 'profiles');
  }

  function getStates() {
    return [
      {
        state: 'profiles',
        config: {
          url: '/profiles',
          component: 'profilesListPage'
        }
      },
      {
        state: 'profile',
        config: {
          url: '/profile/:id',
          component: 'profileDetailsPage'
        }
      }
    ];
  }
})();

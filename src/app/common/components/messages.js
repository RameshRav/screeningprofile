/**
 * Common Component - messages
 * @desc display different labels based on severity
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('messages', {
      templateUrl: 'views/messages.html',
      bindings: {
        message: '='
      },
      controller: controller,
      controllerAs: "vm"
    });

  function controller() {
    var vm = this;

    vm.$onInit = function() {
      switch (vm.message) {
        case 'CRITICAL_ACKNOWLEDGED':
          vm.class = "badge badge-danger"
          break;
        case 'OK':
          vm.class = "badge badge-success"
          break;
        case 'WARNING':
          vm.class = "badge badge-warning"
          break;
        case 'UNKNOWN':
          vm.class = "badge badge-info"
          break;
        case 'CRITICAL':
          vm.class = "badge badge-danger"
          break;
      }

      vm.message = vm.message.toLowerCase();
    }
  }
})();

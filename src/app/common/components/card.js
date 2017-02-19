/**
 * Common Component - card
 * @desc component to display card component
 * @bindings key pattern to extract from profile object
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('card', {
      templateUrl: 'views/card.html',
      bindings: {
        key: '='
      },
      require: {
        parent: '^profileDetailsPage'
      },
      controller: controller,
      controllerAs: "vm"
    });

  function controller() {
    var vm = this;
    vm.getSeverity = getSeverity;

    vm.$onInit = function() {
      vm.profile = vm.parent.profile;
      vm.list = vm.getSeverity();
      vm.hasItems = Object.keys(vm.list).length > 0;
      vm.heading = vm.key.replace(/_/g, " ");
    }

    /**
    ** Method to parse the profile keys
    ** Returns object with new key and values
    ** @namespace common
    **/
    function getSeverity() {
      var keys = {};
      var filter = new RegExp("^" + vm.key);
      for (var key in vm.profile) {
        if (vm.profile.hasOwnProperty(key) && filter.test(key)) {
          var newKey = key.split(filter);
          newKey = newKey[1] ? newKey[1].replace("_", " ") : key;
          keys[newKey] = vm.profile[key].split("-")[1];
        }
      }
      return keys;
    }
  }
})();

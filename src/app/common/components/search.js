/**
 * Common Component - search
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('search', {
      templateUrl: 'views/search.html',
      controller: controller,
      controllerAs: "vm",
      require: {
        'parent': '^profilesListPage'
      }
    });


  function controller() {
    var vm = this;
    vm.update = update;
    vm.clear = clear;
    vm.showClose = showClose;

    vm.$onInit = function() {
      vm.options = vm.parent.options;
    }
    // show close button when text is typed
    function showClose() {
      if (vm.options.filterBy.trim().length > 0) {
        vm.show = true;
        return;
      }
      vm.show = false;
    }


    // Clears the search box and refresh the list
    function clear() {
      vm.options.filterBy = "";
      vm.options.pageNo = 1;
      vm.show = false;
      vm.parent.getProfiles();
    }
    // Update  the profiles list
    function update() {
      vm.show = true;
      vm.options.pageNo = 1;
      vm.parent.getProfiles();
    }

  }
})();

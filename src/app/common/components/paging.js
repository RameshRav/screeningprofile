/**
 * Common Component - paging
 * @desc paging component to show records and pages navigation
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('paging', {
      templateUrl: 'views/paging.html',
      controller: controller,
      controllerAs: "vm",
      require: {
        'parent': '^profilesListPage'
      },
      replace: true
    });


  function controller() {
    var vm = this;
    vm.pageList = ["8", "10", "12"];
    vm.next = next;
    vm.previous = previous;
    vm.update = update;
    vm.changeRecords = changeRecords;

    //Initialise component
    vm.$onInit = function() {
      vm.options = vm.parent.options;
      vm.pages = vm.parent.pages;
    }

    /**
    ** changeRecords Method
    ** @desc Method to update list when number of record changes
    ** Update the profiles
    **/
    function changeRecords() {
      vm.options.pageNo = 1;
      vm.parent.getProfiles();
    }

    function update() {
      vm.parent.getProfiles();
    }

    function previous() {
      if (vm.options.pageNo > 1) {
        vm.options.pageNo--;
        vm.update();
      }
    }

    function next() {
      vm.options.pageNo++;
      vm.update();
    }

  }
})();

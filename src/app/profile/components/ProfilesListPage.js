/**
 * profileDetailsPage component
 * @namespace profile
 */
(function() {
  'use strict';

  angular.module('app.profile')
    .component('profilesListPage', {
      templateUrl: "views/profiles.html",
      controller: controller,
      controllerAs: "vm"
    });

  controller.$inject = ['ProfilesDataService'];


  function controller(ProfilesDataService) {
    var vm = this;
    vm.profiles = [];
    vm.clicked = false;
    vm.options = {
      limit: "8",
      sortBy: "name",
      filterBy: "",
      pageNo: 1,
      order: 1
    };
    vm.pages = {};
    vm.sortorders = {
      name: 1,
      created: 1,
      modified: 1
    };
    vm.getProfiles = getProfiles;
    vm.sort = sort;
    vm.showProfileDetails = showProfileDetails;


    vm.$onInit = function() {
      getProfiles();
    }

    /**
      Method to get list of screening profiles
    **/
    function getProfiles() {
      ProfilesDataService.getProfiles(vm.options)
        .then(apiComplete);
      return;
    }

    function apiComplete(response) {
      vm.profiles = response.results;
      vm.pages.count = response.pages;
    }

    /**
    Method to set sort parameter
    **/

    function sort(sortBy) {
      vm.options.pageNo = 1;
      vm.options.sortBy = sortBy || "name";
      clearOtherSortOptions();
      vm.sortorders[vm.options.sortBy] = -(vm.sortorders[vm.options.sortBy]);
      vm.options.order = vm.sortorders[vm.options.sortBy];
      getProfiles();
    }
    // Reset other sort options on table
    function clearOtherSortOptions() {
      for (var key in vm.sortorders) {
        if (key && key !== vm.options.sortBy) {
          vm.sortorders[key] = 1;
        }
      }
    }

    /**
    ** Show individual profile details
    **/
    function showProfileDetails(id) {
      vm.profileId = id;
      vm.clicked = true;
    }

  }

})();

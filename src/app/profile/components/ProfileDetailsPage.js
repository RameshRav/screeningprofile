/**
* profilesListPage component
* @namespace profile
*/
(function() {
  'use strict';

  angular.module('app.profile')
    .component('profileDetailsPage', {
      templateUrl: "views/profile.html",
      controller: controller,
      controllerAs: "vm",
      bindings: {
        id: '='
      },
      require: {
        'parent': '^profilesListPage'
      }
    });

  controller.$inject = ['ProfilesDataService'];


  function controller(ProfilesDataService) {
    var vm = this;
    vm.getProfile = getProfile;
    vm.gotoList = gotoList;

    vm.$onInit = function() {
      if (vm.id) {
        vm.profile = {};
        getProfile();
      }
    }


    function gotoList() {
      vm.parent.clicked = false;
    }
    /**
      Method to get individual screening profile
    **/
    function getProfile() {
      ProfilesDataService.getProfile(vm.id)
        .then(apiComplete);
      return;

    }

    function apiComplete(response) {
      vm.profile = response.results;
    }

  }

})();

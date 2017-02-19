/**
 * Profiles data Service
 * @desc Service to fetch screening profiles
 * @namespace profile
 */
(function() {
  'use strict';

  angular.module('app.profile')
    .service('ProfilesDataService', ProfilesDataService);

  /**
  * Data service to get screening profiles
  **/
  ProfilesDataService.$inject = ['$http', '$log'];

  function ProfilesDataService($http, $log) {
    return {
      getProfiles: getProfiles,
      getProfile: getProfile
    };
    /**
	    @desc Retruns list of profiles
		@returns {object}
	**/
    function getProfiles(options) {
      return $http.get('/api/v2/screening_profiles/', {
        params: options
      })
        .then(getDataComplete)
        .catch(getDataFailed);
    }

    function getProfile(id) {
      return $http.get('/api/v2/company_blacklists/', {
        params: {
          screening_profile_id: id
        }
      })
        .then(getDataComplete)
        .catch(getDataFailed);
    }

    function getDataComplete(response) {
      return response.data;
    }

    function getDataFailed(error) {
      $log.error('Profiles data service failed' + error.data);
      return {
        data: {
          "message": "Unexpected error occured"
        }
      };
    }
  }

})();

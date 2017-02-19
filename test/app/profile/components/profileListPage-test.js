(function() {
  "use strict";
  describe("ProfilesListPage component", function() {
    var componentController,
      ProfilesDataService,
      httpBackend;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_, _ProfilesDataService_, _$httpBackend_) {
      var callbackFunction = {
        then: function(callback) {
          callback({
            results: [],
            pages: 2
          });
        }
      };
      componentController = _$componentController_('profilesListPage', {});
      ProfilesDataService = _ProfilesDataService_;
      spyOn(ProfilesDataService, "getProfiles").and.returnValue(callbackFunction);
    }));

    it("test component is initialized", function() {
      componentController.$onInit();
      expect(componentController).toBeDefined();
      expect(componentController.pages.count).toEqual(2);
      expect(ProfilesDataService.getProfiles).toHaveBeenCalled();
    });

    it("test component sort method", function() {
      componentController.$onInit();
      componentController.sort("name");
      expect(componentController.options.pageNo).toEqual(1);
      expect(componentController.options.sortBy).toEqual("name");
      expect(ProfilesDataService.getProfiles).toHaveBeenCalled();
    });
    it("test component sort method with invalid sort params", function() {
      componentController.$onInit();
      componentController.sort();
      expect(componentController.options.pageNo).toEqual(1);
      expect(componentController.options.sortBy).toEqual("name");
      expect(ProfilesDataService.getProfiles).toHaveBeenCalled();
    });

    it("test component show profile details method", function() {
      componentController.$onInit();
      componentController.showProfileDetails();
      expect(componentController.options.pageNo).toEqual(1);
      expect(componentController.options.sortBy).toEqual("name");
      expect(componentController.clicked).toEqual(true);
    });
  });
})();

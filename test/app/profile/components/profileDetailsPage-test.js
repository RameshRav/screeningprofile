(function() {
  "use strict";
  describe("ProfileDetailsPage component", function() {
    var componentController,
      ProfilesDataService,
      parentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_, _ProfilesDataService_) {
      var callbackFunction = {
        then: function(callback) {
          callback({
            results: {},
          });
        }
      };
      ProfilesDataService = _ProfilesDataService_;
      componentController = _$componentController_('profileDetailsPage', {}, {
        id: 123
      });
      parentController = _$componentController_('profilesListPage', {});
      componentController.parent = parentController;
      spyOn(ProfilesDataService, "getProfile").and.returnValue(callbackFunction);
    }));

    it("test component is initialized", function() {
      expect(componentController.profile).not.toBeDefined();
      componentController.$onInit();
      expect(componentController).toBeDefined();
      expect(componentController.profile).toBeDefined();
      expect(ProfilesDataService.getProfile).toBeDefined();
    });

    it("test component gotolist method to go back to profiles list ", function() {
      expect(componentController.profile).not.toBeDefined();
      componentController.$onInit();
      componentController.gotoList();
      expect(parentController.clicked).toEqual(false);
    });
  });
})();

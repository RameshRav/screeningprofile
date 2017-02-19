(function() {
  "use strict";
  describe("Card component", function() {
    var componentController,
      parentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_) {
      componentController = _$componentController_('card', {}, {
        key: 'sample_key'
      });
      parentController = _$componentController_('profileDetailsPage', {}, {
        profile: {
          "sample_key_severe": "1-warning"
        }
      });
      componentController.parent = parentController;
      componentController.$onInit();
    }));

    it("test component is initialized", function() {
      expect(componentController).toBeDefined();
      expect(componentController.profile).toBeDefined();
      expect(componentController.list).toBeDefined();
      expect(componentController.show).not.toBeDefined();
      expect(componentController.heading).toEqual("sample key");
    });

    it("test component getSeverity method", function() {
      componentController.key = "new_sample";
      var keys = componentController.getSeverity();
      expect(keys).toEqual({});
    });
  });
})();

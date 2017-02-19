(function() {
  "use strict";
  describe("Messages component", function() {
    var componentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_) {
      componentController = _$componentController_('messages', {}, {
        message: ""
      });
    }));

    it("test component is initialized", function() {
      expect(componentController).toBeDefined();
    });

    it("test component for different messages", function() {
      expect(componentController.class).not.toBeDefined();
      componentController.message = "OK";
      componentController.$onInit();
      expect(componentController.class).toBeDefined();
    });
    it("test component for different messages", function() {
      expect(componentController.class).not.toBeDefined();
      componentController.message = "WARNING";
      componentController.$onInit();
      expect(componentController.class).toBeDefined();
    });
    it("test component for different messages", function() {
      expect(componentController.class).not.toBeDefined();
      componentController.message = "UNKNOWN";
      componentController.$onInit();
      expect(componentController.class).toBeDefined();
    });
    it("test component for different messages", function() {
      expect(componentController.class).not.toBeDefined();
      componentController.message = "CRITICAL_ACKNOWLEDGED";
      componentController.$onInit();
      expect(componentController.class).toBeDefined();
    });
    it("test component for different messages", function() {
      expect(componentController.class).not.toBeDefined();
      componentController.message = "CRITICAL";
      componentController.$onInit();
      expect(componentController.class).toBeDefined();
    });
  });
})();

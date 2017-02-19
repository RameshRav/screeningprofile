(function() {
  "use strict";
  describe("Search component", function() {
    var componentController,
      parentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_) {
      componentController = _$componentController_('search', {});
      parentController = _$componentController_('profilesListPage', {});
      componentController.parent = parentController;
      componentController.$onInit();
    }));

    it("test component is initialized", function() {
      expect(componentController).toBeDefined();
      expect(componentController.update).toBeDefined();
      expect(componentController.clear).toBeDefined();
      expect(componentController.showClose).toBeDefined();
      expect(componentController.options).toBeDefined();
    });

    it("test component clear method", function() {
      spyOn(componentController.parent, "getProfiles");
      componentController.clear();
      expect(componentController.options.filterBy).toEqual("");
      expect(componentController.show).toEqual(false);
      expect(componentController.options.pageNo).toEqual(1);
      expect(componentController.parent.getProfiles).toHaveBeenCalled();
    });

    it("test component update method", function() {
      spyOn(componentController.parent, "getProfiles");
      componentController.update();
      expect(componentController.options.filterBy).toEqual("");
      expect(componentController.show).toEqual(true);
      expect(componentController.options.pageNo).toEqual(1);
      expect(componentController.parent.getProfiles).toHaveBeenCalled();
    });

    it("test component showClose button method", function() {
      componentController.showClose();
      expect(componentController.show).toEqual(false);
    });

    it("test component showClose button method", function() {
      componentController.options.filterBy = "a";
      componentController.showClose();
      expect(componentController.show).toEqual(true);
    });

  });
})();

(function() {
  "use strict";
  describe("Paging component", function() {
    var componentController,
      parentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_) {
      componentController = _$componentController_('paging', {});
      parentController = _$componentController_('profilesListPage', {});
      componentController.parent = parentController;
      spyOn(componentController.parent, "getProfiles");
    }));

    it("test component is initialized", function() {
      expect(componentController).toBeDefined();
      expect(componentController.options).not.toBeDefined();
      expect(componentController.next).toBeDefined();
      expect(componentController.previous).toBeDefined();
      expect(componentController.changeRecords).toBeDefined();
    });

    it("test component init method", function() {
      componentController.$onInit();
      expect(componentController.options).toBeDefined();
      expect(componentController.pages).toBeDefined();
    });
    it("test component next page", function() {
      componentController.$onInit();
      componentController.next();
      expect(componentController.options.pageNo).toEqual(2);
      expect(componentController.parent.getProfiles).toHaveBeenCalled();
    });
    it("test component previous page", function() {
      componentController.$onInit();
      componentController.options.pageNo = 2;
      componentController.previous();
      expect(componentController.options.pageNo).toEqual(1);
      expect(componentController.parent.getProfiles).toHaveBeenCalled();
    });
    it("test component previous page when page number is already on page1", function() {
      componentController.$onInit();
      componentController.previous();
      expect(componentController.options.pageNo).toEqual(1);
    });

    it("test component number of records per page", function() {
      componentController.$onInit();
      componentController.changeRecords();
      expect(componentController.parent.getProfiles).toHaveBeenCalled();
    });
  });
})();

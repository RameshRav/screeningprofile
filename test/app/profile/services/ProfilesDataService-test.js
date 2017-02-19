(function() {
  "use strict";
  describe("ProfilesDataService", function() {
    var ProfilesDataService,
      httpBackend,
      options;
    beforeEach(module("app"));
    beforeEach(inject(function(_$httpBackend_, _ProfilesDataService_) {
      options = {
        limit: "8",
        sortBy: "name",
        filterBy: "",
        pageNo: 1,
        order: 1
      };
      httpBackend = _$httpBackend_;
      ProfilesDataService = _ProfilesDataService_;
    }));

    it("test data service is initialized", function(done) {
      expect(ProfilesDataService).toBeDefined();
      done();
    });
    it("test data service getProfiles method", function(done) {
      httpBackend.whenGET("/api/v2/screening_profiles/").respond(200, {
        results: []
      });
      ProfilesDataService.getProfiles().then(function(data) {
        expect(data.results.length).toEqual(0);
        done();
      });
      httpBackend.flush();
    });
    it("test data service getProfiles method failed", function(done) {
      httpBackend.whenGET("/api/v2/screening_profiles/").respond(400, {
        results: []
      });
      ProfilesDataService.getProfiles().then(function(response) {
        expect(response.data.message).toBeDefined();
        done();
      });
      httpBackend.flush();
    });
    it("test data service getProfile method", function(done) {
      httpBackend.whenGET("/api/v2/company_blacklists/").respond(200, {
        results: []
      });
      ProfilesDataService.getProfile().then(function(response) {
        expect(response.results).toBeDefined();
        done();
      });
      httpBackend.flush();
    });
  });

})();

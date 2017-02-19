var profilesData = require("./data.js");

var profiles = function() {};
profiles.prototype.getProfile = function(id) {
  var profile = {};
  var profiles = new profilesData();
  var results = profiles.results;

  for (var i = 0, len = results.length; i < len; i++) {
    if (results[i].id === id) {
      profile = results[i];
    }
  }

  return {
    results: profile
  };
};


profiles.prototype.filter = function(filterParams) {
  var self = this;
  var pageNo = Number(filterParams.pageNo) || 1;
  var sortBy = filterParams.sortBy || "name";
  var filterBy = filterParams.filterBy || "";
  var limit = Number(filterParams.limit) || "10";
  var order = Number(filterParams.order) || 1;
  var profiles = new profilesData();
  var results = profiles.results;
  var finalResults = [];
  var startIndex = (pageNo - 1) * limit;
  var endIndex = startIndex + limit;
  var totalRecords = 0;
  profiles.count = results.length;

  results.sort(function(a, b) {
    var sortA = a[sortBy]; // ignore upper and lowercase
    var sortB = b[sortBy];
    if (new Date(sortA) === "Invalid Date") {
      sortA = new Date(sortA);
      sortA = new Date(sortB);
    } else {
      sortA = sortA.toUpperCase();
      sortB = sortB.toUpperCase();
    }
    if (sortA < sortB) {
      return -(order);
    }
    if (sortA > sortB) {
      return order;
    }

    // names must be equal
    return 0;
  });

  finalResults = results;
  if (filterBy) {
    finalResults = [];
    var filter = filterBy.toLowerCase();
    for (var i = 0, len = results.length; i < len; i++) {
      var name = results[i].name.toLowerCase();
      var countrySeverity = results[i].country_check_severity.toLowerCase();
      if( (name.indexOf(filter) !== -1 || countrySeverity.indexOf(filter) !== -1) ) {
        finalResults.push(results[i]);
      }
    }
    profiles.count = finalResults.length;
  }

  if (finalResults.length > 0) {
    var limitedResults = [];
    for (var i = startIndex; i < endIndex; i++) {
      if (finalResults[i])
        limitedResults.push(finalResults[i]);
    }
    finalResults = limitedResults;
  }

  profiles.pages = Math.ceil(profiles.count / limit);
  profiles.results = finalResults;
  return profiles;
}

module.exports = new profiles();

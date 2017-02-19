var express = require('express');
var bodyParser = require('body-parser')
var model = require('./profiles.js');
var app = express();
app.use(bodyParser.json());
app.use(express.static("./build"));
var profilesRouter = express.Router();
profilesRouter.route("/screening_profiles").get(function(req, res) {
  var query = {};
  if (req.query) {
    query = req.query;
  }
  res.json(model.filter(req.query));
});
profilesRouter.route("/company_blacklists").get(function(req, res) {
  var query = {};
  if (req.query) {
    query = req.query;
  }
  res.json(model.getProfile(req.query.screening_profile_id));
});
app.use('/api/v2/', profilesRouter);
app.listen(8000);

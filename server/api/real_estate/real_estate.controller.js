'use strict';

var _ = require('lodash');
var RealEstate = require('./real_estate.model');

// Get list of real_estates
exports.index = function(req, res) {
  RealEstate.find(function (err, real_estates) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(real_estates);
  });
};

// Get a single real_estate
exports.show = function(req, res) {
  RealEstate.findById(req.params.id, function (err, real_estate) {
    if(err) { return handleError(res, err); }
    if(!real_estate) { return res.status(404).send('Not Found'); }
    return res.json(real_estate);
  });
};

// Creates a new real_estate in the DB.
exports.create = function(req, res) {
  RealEstate.create(req.body, function(err, real_estate) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(real_estate);
  });
};

// Updates an existing real_estate in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  RealEstate.findById(req.params.id, function (err, real_estate) {
    if (err) { return handleError(res, err); }
    if(!real_estate) { return res.status(404).send('Not Found'); }
    var updated = _.merge(real_estate, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(real_estate);
    });
  });
};

// Deletes a real_estate from the DB.
exports.destroy = function(req, res) {
  RealEstate.findById(req.params.id, function (err, real_estate) {
    if(err) { return handleError(res, err); }
    if(!real_estate) { return res.status(404).send('Not Found'); }
    real_estate.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
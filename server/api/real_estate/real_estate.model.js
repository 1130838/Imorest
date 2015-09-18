'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RealEstateSchema = new Schema({

  search_type: String,
  type: String,
  address: String,
  broker: String,
  price: Number,
  area: Number,
  active: Boolean
});

module.exports = mongoose.model('RealEstate', RealEstateSchema);

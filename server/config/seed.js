/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var RealEstate = require('../api/real_estate/real_estate.model');

RealEstate.find({}).remove(function () {
  RealEstate.create({
    search_type: 'for_sale',
    type: 'Apartment',
    address: 'Porto',
    broker: 'Vânia Branco',
    price: '100000',
    area: '100',
    active: true
  }, {
    search_type: 'for_sale',
    type: 'House',
    address: 'Baga',
    broker: 'Vânia Branco',
    price: '120000',
    area: '150',
    active: true
  }, {
    search_type: 'for_rent',
    type: 'Apartment',
    address: 'Porto',
    broker: 'Vânia Borges',
    price: '400',
    area: '80',
    active: true
  });
});


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Search your property',
    info : 'Complete widget to help you search or sell your property'
  }, {
    name : '-',
    info : '-'
  }, {
    name : '-',
    info : '-'
  },  {
    name : '-',
    info : '-'
  },  {
    name : '-',
    info : '-'
  },{
    name : '-',
    info : '-'
  });
});

User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});

/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var RealEstate = require('../api/real_estate/real_estate.model');

RealEstate.find({}).remove(function () {
  RealEstate.create([
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 433504,
        "area": 754,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 67480,
        "area": 783,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 83746,
        "area": 4723,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 360069,
        "area": 136,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 203554,
        "area": 1571,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 101586,
        "area": 2028,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 43788,
        "area": 669,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 405348,
        "area": 3782,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 7284,
        "area": 2918,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 34410,
        "area": 4150,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 45538,
        "area": 281,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 79863,
        "area": 4223,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 365143,
        "area": 309,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 378996,
        "area": 2705,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 152724,
        "area": 897,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 277317,
        "area": 4815,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 60104,
        "area": 1538,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 419641,
        "area": 2119,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 18995,
        "area": 3838,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 31977,
        "area": 342,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 459988,
        "area": 254,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 356534,
        "area": 3065,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 263068,
        "area": 653,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 1689,
        "area": 4927,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 310654,
        "area": 1531,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 74421,
        "area": 3494,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 270473,
        "area": 715,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 139381,
        "area": 170,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 100154,
        "area": 3129,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 449940,
        "area": 4722,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 291335,
        "area": 1666,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 208468,
        "area": 2333,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 264816,
        "area": 215,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 409666,
        "area": 2001,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 397972,
        "area": 4094,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 466347,
        "area": 2864,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 215837,
        "area": 996,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 329339,
        "area": 771,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 360148,
        "area": 611,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 46231,
        "area": 4884,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 82207,
        "area": 2102,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 71341,
        "area": 2936,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 193371,
        "area": 4879,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 227978,
        "area": 4845,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 199863,
        "area": 4999,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 258135,
        "area": 1573,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 83425,
        "area": 930,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 46541,
        "area": 1074,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 257489,
        "area": 389,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 275862,
        "area": 2603,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 82610,
        "area": 3670,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 158950,
        "area": 3611,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 160896,
        "area": 422,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 296563,
        "area": 249,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 329255,
        "area": 842,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 145832,
        "area": 3245,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 443655,
        "area": 639,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 457735,
        "area": 587,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 251237,
        "area": 3316,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 260459,
        "area": 447,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 312081,
        "area": 3317,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 419968,
        "area": 4726,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 361617,
        "area": 3675,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 177567,
        "area": 439,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 36914,
        "area": 190,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 163437,
        "area": 3187,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 96892,
        "area": 4598,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 458546,
        "area": 247,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 319463,
        "area": 4405,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 112191,
        "area": 4130,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 317553,
        "area": 422,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 248289,
        "area": 1064,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 267345,
        "area": 3037,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 66366,
        "area": 367,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 408821,
        "area": 380,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 310824,
        "area": 2268,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 182114,
        "area": 798,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 218295,
        "area": 3812,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 145867,
        "area": 796,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 53799,
        "area": 4614,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 440834,
        "area": 2350,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 22894,
        "area": 3040,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 433303,
        "area": 3696,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 213396,
        "area": 34,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 286048,
        "area": 3495,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 470751,
        "area": 2069,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 128413,
        "area": 3169,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 64838,
        "area": 126,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 370162,
        "area": 4046,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 372069,
        "area": 4119,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 477460,
        "area": 751,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 385034,
        "area": 1843,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 486596,
        "area": 3951,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 487831,
        "area": 15,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 435535,
        "area": 1763,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 216880,
        "area": 2930,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 105046,
        "area": 4658,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 391244,
        "area": 2199,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 193271,
        "area": 1723,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 83907,
        "area": 3618,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 406913,
        "area": 821,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 52849,
        "area": 3767,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 388312,
        "area": 1639,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 127277,
        "area": 3114,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 229660,
        "area": 3903,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 408376,
        "area": 4456,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 488429,
        "area": 4107,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 475590,
        "area": 4449,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 410284,
        "area": 4306,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 54941,
        "area": 1880,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 7172,
        "area": 3704,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 480024,
        "area": 3487,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 228113,
        "area": 4251,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 102232,
        "area": 2491,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 179736,
        "area": 1303,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 271476,
        "area": 1525,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 368060,
        "area": 1530,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 484487,
        "area": 2261,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 354953,
        "area": 3767,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 139114,
        "area": 3343,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 15848,
        "area": 2892,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 337280,
        "area": 641,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 20029,
        "area": 1844,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 15609,
        "area": 4101,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 459800,
        "area": 1211,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 155934,
        "area": 4760,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 54072,
        "area": 35,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 173145,
        "area": 3103,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 105132,
        "area": 415,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 183978,
        "area": 1049,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 372565,
        "area": 2565,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 164071,
        "area": 3066,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 480286,
        "area": 1060,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 41964,
        "area": 1889,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 345047,
        "area": 1715,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 32983,
        "area": 1670,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 55873,
        "area": 4414,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 125825,
        "area": 1177,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 160337,
        "area": 4066,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 117710,
        "area": 3069,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 171937,
        "area": 523,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 464087,
        "area": 33,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 360629,
        "area": 2147,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 387115,
        "area": 1839,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 318439,
        "area": 4206,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 73512,
        "area": 4213,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 458375,
        "area": 1208,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 178478,
        "area": 235,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 98250,
        "area": 3366,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 287095,
        "area": 3692,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 147428,
        "area": 917,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 362428,
        "area": 1549,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 412941,
        "area": 2946,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 304688,
        "area": 1291,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 237958,
        "area": 3704,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 477558,
        "area": 4299,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 338013,
        "area": 4252,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 74751,
        "area": 2425,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 256508,
        "area": 3057,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 429919,
        "area": 4234,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 149846,
        "area": 1568,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 89274,
        "area": 1031,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 219406,
        "area": 158,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 301412,
        "area": 4070,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 286177,
        "area": 1920,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 40731,
        "area": 2955,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 357801,
        "area": 675,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 98780,
        "area": 510,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 332399,
        "area": 1518,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 170583,
        "area": 1348,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 44223,
        "area": 3296,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 191933,
        "area": 1775,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 80000,
        "area": 3346,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 417916,
        "area": 4899,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 239172,
        "area": 2576,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 297670,
        "area": 598,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 352486,
        "area": 3903,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 55499,
        "area": 1265,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 461837,
        "area": 3669,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 439311,
        "area": 3215,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 156504,
        "area": 3165,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 417072,
        "area": 3131,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 138545,
        "area": 232,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 214834,
        "area": 3826,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 139002,
        "area": 2928,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 210451,
        "area": 4066,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 360088,
        "area": 3511,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 347709,
        "area": 1219,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 365078,
        "area": 3487,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 359586,
        "area": 3325,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 19948,
        "area": 1227,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 362666,
        "area": 3710,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 141310,
        "area": 2797,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 479074,
        "area": 2709,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 377518,
        "area": 1138,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 414811,
        "area": 368,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 234122,
        "area": 2397,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 137677,
        "area": 2922,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 81507,
        "area": 1693,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 61446,
        "area": 3433,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 155270,
        "area": 4542,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 141018,
        "area": 776,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 396098,
        "area": 1689,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 454792,
        "area": 4495,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 168809,
        "area": 2252,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 96639,
        "area": 3553,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 157958,
        "area": 4651,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 401775,
        "area": 735,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 118495,
        "area": 4302,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 324887,
        "area": 2256,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 409308,
        "area": 3333,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 2470,
        "area": 4547,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 48958,
        "area": 2651,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 493080,
        "area": 2281,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 376652,
        "area": 611,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 383220,
        "area": 33,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 50037,
        "area": 1465,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 74311,
        "area": 3448,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 200833,
        "area": 38,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 26339,
        "area": 3902,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 260508,
        "area": 269,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 378882,
        "area": 2156,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 345303,
        "area": 2410,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 432732,
        "area": 716,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 409820,
        "area": 4287,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 82688,
        "area": 3654,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 43939,
        "area": 3051,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 269261,
        "area": 2681,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 459359,
        "area": 2529,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 162234,
        "area": 770,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 417627,
        "area": 4122,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 83930,
        "area": 2434,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 194251,
        "area": 2829,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 35663,
        "area": 4808,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 409028,
        "area": 3384,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 460647,
        "area": 3881,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 192158,
        "area": 1481,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 187,
        "area": 4169,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 459822,
        "area": 190,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 73251,
        "area": 2121,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 276445,
        "area": 3529,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 252497,
        "area": 4954,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 4289,
        "area": 3302,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 267461,
        "area": 3604,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 108250,
        "area": 2820,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 416565,
        "area": 634,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 247442,
        "area": 3649,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 450474,
        "area": 355,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 123271,
        "area": 1058,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 36987,
        "area": 4275,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 14661,
        "area": 3787,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 390978,
        "area": 3134,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 86226,
        "area": 1559,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 185391,
        "area": 926,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 40560,
        "area": 3886,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 187020,
        "area": 277,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 163679,
        "area": 622,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 183200,
        "area": 1162,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 34334,
        "area": 832,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 245863,
        "area": 3529,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 3845,
        "area": 4489,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 276325,
        "area": 1296,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 476891,
        "area": 4034,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 444566,
        "area": 1205,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 40188,
        "area": 960,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 295542,
        "area": 1718,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 76809,
        "area": 3881,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 93499,
        "area": 3376,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 466865,
        "area": 650,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 297522,
        "area": 2722,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 109266,
        "area": 926,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 410969,
        "area": 3151,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 449466,
        "area": 3957,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 272932,
        "area": 4812,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 304636,
        "area": 856,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 57014,
        "area": 4913,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 139200,
        "area": 2754,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 11363,
        "area": 3239,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 74513,
        "area": 221,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 368920,
        "area": 1989,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 180969,
        "area": 2541,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 209938,
        "area": 532,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 114308,
        "area": 4026,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 404975,
        "area": 1829,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 373589,
        "area": 3638,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 427453,
        "area": 530,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 278279,
        "area": 3741,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 28895,
        "area": 592,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 207025,
        "area": 2270,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 87501,
        "area": 1131,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 50433,
        "area": 3369,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 448552,
        "area": 4011,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 477404,
        "area": 1181,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 336670,
        "area": 1775,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 289791,
        "area": 4272,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 312510,
        "area": 1383,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 297232,
        "area": 590,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 398786,
        "area": 1181,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 463648,
        "area": 703,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 484773,
        "area": 544,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 285842,
        "area": 1572,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 420075,
        "area": 3884,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 109850,
        "area": 1637,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 182044,
        "area": 2545,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 98453,
        "area": 1819,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 320612,
        "area": 2269,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 193689,
        "area": 2097,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 331725,
        "area": 4485,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 390082,
        "area": 801,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 8133,
        "area": 2375,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 43765,
        "area": 1556,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 136693,
        "area": 711,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 123390,
        "area": 1321,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 241376,
        "area": 101,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 268458,
        "area": 3706,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 176775,
        "area": 2343,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 134290,
        "area": 2846,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 152666,
        "area": 1689,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 108527,
        "area": 2334,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 374585,
        "area": 2943,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 198510,
        "area": 1384,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 183578,
        "area": 3252,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 370968,
        "area": 42,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 494709,
        "area": 935,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 268110,
        "area": 230,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 91727,
        "area": 3329,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 83495,
        "area": 3074,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 371552,
        "area": 1135,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 65522,
        "area": 3825,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 467330,
        "area": 4198,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 12426,
        "area": 290,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 491695,
        "area": 1996,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 423521,
        "area": 376,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 185211,
        "area": 4494,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 286455,
        "area": 3773,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 190056,
        "area": 2547,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 442976,
        "area": 2590,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 210002,
        "area": 3228,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 92042,
        "area": 1043,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 234733,
        "area": 2239,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 45049,
        "area": 1807,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 398462,
        "area": 3672,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 18651,
        "area": 1970,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 73123,
        "area": 4192,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 236472,
        "area": 670,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 421437,
        "area": 4814,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 119168,
        "area": 438,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 408016,
        "area": 4858,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 212770,
        "area": 3262,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 12316,
        "area": 708,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 118595,
        "area": 2045,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 189652,
        "area": 74,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 299501,
        "area": 235,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 470756,
        "area": 2366,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 459039,
        "area": 279,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 260054,
        "area": 1819,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 378184,
        "area": 1919,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 7266,
        "area": 766,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 362818,
        "area": 1477,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 392497,
        "area": 2673,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 406162,
        "area": 929,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 48946,
        "area": 4892,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 246944,
        "area": 3993,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 352985,
        "area": 3240,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 417407,
        "area": 3685,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 332261,
        "area": 2280,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 103695,
        "area": 820,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 9160,
        "area": 1935,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 176743,
        "area": 1724,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 292342,
        "area": 3310,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 253783,
        "area": 1610,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 356500,
        "area": 2314,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 205249,
        "area": 1034,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 248431,
        "area": 2655,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 222708,
        "area": 3651,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 42532,
        "area": 2512,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 172624,
        "area": 4897,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 370461,
        "area": 3222,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 63484,
        "area": 1339,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 272118,
        "area": 3644,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 211046,
        "area": 1448,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 72663,
        "area": 1154,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 381899,
        "area": 1386,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 365247,
        "area": 4080,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 456092,
        "area": 3283,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 355400,
        "area": 4165,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 200819,
        "area": 1978,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 128397,
        "area": 931,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 358683,
        "area": 1428,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 394764,
        "area": 1116,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 192102,
        "area": 958,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 214664,
        "area": 3366,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 459282,
        "area": 3322,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 3859,
        "area": 138,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 376903,
        "area": 675,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 301180,
        "area": 2707,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 206876,
        "area": 4958,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 159149,
        "area": 4921,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 64715,
        "area": 3834,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 418428,
        "area": 2467,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 135879,
        "area": 2834,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 368215,
        "area": 4148,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 202395,
        "area": 1951,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 212227,
        "area": 231,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 112896,
        "area": 346,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 3200,
        "area": 1997,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 409129,
        "area": 478,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 325289,
        "area": 4955,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 395317,
        "area": 620,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 215691,
        "area": 4522,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 289941,
        "area": 1634,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 107870,
        "area": 3594,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 190740,
        "area": 863,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 391085,
        "area": 3197,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 5997,
        "area": 2160,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 497550,
        "area": 2213,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 62574,
        "area": 2253,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 21637,
        "area": 1256,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 459859,
        "area": 1729,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 286193,
        "area": 267,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 476257,
        "area": 3944,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 383067,
        "area": 2789,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 306113,
        "area": 1357,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 211831,
        "area": 4215,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 494607,
        "area": 2857,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 367858,
        "area": 4110,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 235609,
        "area": 600,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 147245,
        "area": 3503,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 409106,
        "area": 2285,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 344669,
        "area": 4357,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 260041,
        "area": 951,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 225807,
        "area": 3528,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 94518,
        "area": 1851,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 229761,
        "area": 1138,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 347362,
        "area": 4347,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 85045,
        "area": 4766,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 453127,
        "area": 3963,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 74574,
        "area": 1158,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 418536,
        "area": 2875,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 185544,
        "area": 3732,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 129794,
        "area": 2409,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 5731,
        "area": 3996,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 125183,
        "area": 1158,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 252824,
        "area": 102,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 209447,
        "area": 2863,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 139084,
        "area": 2196,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 478646,
        "area": 3472,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 311750,
        "area": 3159,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 122691,
        "area": 1340,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 192725,
        "area": 3483,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 41398,
        "area": 4296,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 310775,
        "area": 2814,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 82431,
        "area": 2028,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 229031,
        "area": 4716,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 199525,
        "area": 4279,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 65325,
        "area": 3457,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 389673,
        "area": 3298,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 400326,
        "area": 3434,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 350707,
        "area": 2477,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 26235,
        "area": 4558,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 175969,
        "area": 1467,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 82871,
        "area": 2800,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 164258,
        "area": 299,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 169625,
        "area": 3641,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 344776,
        "area": 2779,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 54262,
        "area": 4108,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 86950,
        "area": 1409,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 424819,
        "area": 4476,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 216185,
        "area": 2546,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 203305,
        "area": 1178,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 454104,
        "area": 297,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 205259,
        "area": 3177,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 476303,
        "area": 2282,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 98111,
        "area": 3975,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 167128,
        "area": 3310,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 271357,
        "area": 750,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 167862,
        "area": 1791,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 97285,
        "area": 1094,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 341927,
        "area": 151,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 392555,
        "area": 2597,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 375163,
        "area": 2216,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 80701,
        "area": 415,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 440806,
        "area": 2933,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 283555,
        "area": 888,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 174545,
        "area": 399,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 439384,
        "area": 911,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 468352,
        "area": 2906,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 142248,
        "area": 1723,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 159202,
        "area": 3880,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 84182,
        "area": 3259,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 440743,
        "area": 1242,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 178640,
        "area": 3688,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 484388,
        "area": 192,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 332101,
        "area": 3806,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 295094,
        "area": 4913,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 238971,
        "area": 2251,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Warehouse",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 62639,
        "area": 4688,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 4502,
        "area": 1638,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 299782,
        "area": 1395,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Warehouse",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 192108,
        "area": 914,
        "isActive": false
      }
    ]
  );
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

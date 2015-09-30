'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var RealEstate = require('../api/real_estate/real_estate.model');

RealEstate.find({}).remove(function () {
  RealEstate.create(

    //region Json Dummies
        [
          {
            "search_type": "for_sale",
            "type": "House",
            "address": "Amarante",
            "broker": "Bruno Devesa",
            "price": 5,
            "area": 113,
            "isActive": false
          },
          {
            "search_type": "for_sale",
            "type": "House",
            "address": "Porto",
            "broker": "Bruno Devesa",
            "price": 71364,
            "area": 113,
            "isActive": false
          },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 71364,
          "area": 113,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Celio Cerqueira",
          "price": 134847,
          "area": 197,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 48321,
          "area": 162,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 112227,
          "area": 135,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 192265,
          "area": 169,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Braga",
          "broker": "Celio Cerqueira",
          "price": 162117,
          "area": 58,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 133114,
          "area": 113,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Jorge Leal",
          "price": 138537,
          "area": 246,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 29074,
          "area": 188,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 33448,
          "area": 199,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Vania Branco",
          "price": 61104,
          "area": 211,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 69963,
          "area": 216,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 108915,
          "area": 224,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 80614,
          "area": 183,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 147362,
          "area": 249,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Celio Cerqueira",
          "price": 27237,
          "area": 182,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Celio Cerqueira",
          "price": 118858,
          "area": 238,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 5117,
          "area": 145,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Braga",
          "broker": "Celio Cerqueira",
          "price": 30766,
          "area": 91,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 134139,
          "area": 209,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 103904,
          "area": 185,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 43337,
          "area": 168,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 26652,
          "area": 209,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 166349,
          "area": 122,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 60256,
          "area": 120,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 39479,
          "area": 50,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 27584,
          "area": 53,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Vania Branco",
          "price": 113267,
          "area": 52,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 138222,
          "area": 166,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 77498,
          "area": 121,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Braga",
          "broker": "Jorge Leal",
          "price": 190046,
          "area": 69,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 31057,
          "area": 210,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 95767,
          "area": 204,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 43200,
          "area": 78,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Vania Branco",
          "price": 24592,
          "area": 214,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 68758,
          "area": 67,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 65557,
          "area": 96,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Braga",
          "broker": "Celio Cerqueira",
          "price": 191027,
          "area": 167,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 189407,
          "area": 179,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Porto",
          "broker": "Vania Branco",
          "price": 189599,
          "area": 202,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Vania Branco",
          "price": 55325,
          "area": 227,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Vania Branco",
          "price": 104192,
          "area": 141,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 187065,
          "area": 75,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 29048,
          "area": 85,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 7276,
          "area": 78,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Vania Branco",
          "price": 31801,
          "area": 191,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 105232,
          "area": 192,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 140660,
          "area": 173,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 125669,
          "area": 241,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 39060,
          "area": 122,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 116473,
          "area": 187,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Jorge Leal",
          "price": 38819,
          "area": 142,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 36961,
          "area": 235,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 163527,
          "area": 114,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 158496,
          "area": 116,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 92145,
          "area": 190,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Matosinhos",
          "broker": "Jorge Leal",
          "price": 98355,
          "area": 144,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 120953,
          "area": 69,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 1346,
          "area": 198,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 140485,
          "area": 221,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Braga",
          "broker": "Celio Cerqueira",
          "price": 61126,
          "area": 204,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 195433,
          "area": 134,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 29423,
          "area": 114,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 159031,
          "area": 176,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Vania Branco",
          "price": 52227,
          "area": 72,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 97117,
          "area": 223,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Coimbra",
          "broker": "Celio Cerqueira",
          "price": 191327,
          "area": 224,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 171963,
          "area": 83,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 138340,
          "area": 56,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 90362,
          "area": 229,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 76796,
          "area": 211,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Celio Cerqueira",
          "price": 171617,
          "area": 225,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 36175,
          "area": 221,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Carlos Narciso",
          "price": 180078,
          "area": 240,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 29468,
          "area": 245,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 154124,
          "area": 118,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Braga",
          "broker": "Jorge Leal",
          "price": 48537,
          "area": 62,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 29048,
          "area": 53,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 157738,
          "area": 175,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 84565,
          "area": 128,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Matosinhos",
          "broker": "Jorge Leal",
          "price": 37894,
          "area": 60,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 116437,
          "area": 106,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 5462,
          "area": 150,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 72837,
          "area": 109,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Porto",
          "broker": "Celio Cerqueira",
          "price": 151294,
          "area": 209,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Matosinhos",
          "broker": "Vania Branco",
          "price": 188023,
          "area": 104,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Jorge Leal",
          "price": 85324,
          "area": 209,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Vania Branco",
          "price": 142629,
          "area": 113,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Jorge Leal",
          "price": 95215,
          "area": 78,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Braga",
          "broker": "Jorge Leal",
          "price": 192114,
          "area": 233,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Braga",
          "broker": "Celio Cerqueira",
          "price": 75868,
          "area": 59,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "House",
          "address": "Braga",
          "broker": "Jorge Leal",
          "price": 197726,
          "area": 186,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Apartment",
          "address": "Coimbra",
          "broker": "Celio Cerqueira",
          "price": 88902,
          "area": 50,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Porto",
          "broker": "Carlos Narciso",
          "price": 147999,
          "area": 164,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Matosinhos",
          "broker": "Celio Cerqueira",
          "price": 69586,
          "area": 204,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Porto",
          "broker": "Jorge Leal",
          "price": 59286,
          "area": 178,
          "isActive": true
        },
        {
          "search_type": "for_sale",
          "type": "Land",
          "address": "Braga",
          "broker": "Carlos Narciso",
          "price": 125705,
          "area": 101,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "House",
          "address": "Porto",
          "broker": "Vania Branco",
          "price": 198103,
          "area": 181,
          "isActive": false
        },
        {
          "search_type": "for_sale",
          "type": "Apartment",
          "address": "Braga",
          "broker": "Vania Branco",
          "price": 89915,
          "area": 99,
          "isActive": false
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Carlos Narciso",
          "price": 47738,
          "area": 54,
          "isActive": true
        },
        {
          "search_type": "for_rent",
          "type": "Land",
          "address": "Coimbra",
          "broker": "Celio Cerqueira",
          "price": 86763,
          "area": 221,
          "isActive": true
        },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 39964,
        "area": 226,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 178964,
        "area": 120,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 84901,
        "area": 143,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 59020,
        "area": 168,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 185900,
        "area": 207,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 150311,
        "area": 50,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 128913,
        "area": 197,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 9147,
        "area": 134,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 12931,
        "area": 60,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 198864,
        "area": 111,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 149059,
        "area": 86,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 62722,
        "area": 236,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 41057,
        "area": 171,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 14871,
        "area": 75,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 142005,
        "area": 79,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 59326,
        "area": 80,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 11559,
        "area": 58,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 187901,
        "area": 122,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 82450,
        "area": 91,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 83291,
        "area": 80,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 82360,
        "area": 112,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 4256,
        "area": 152,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 91796,
        "area": 147,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 117136,
        "area": 129,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 67483,
        "area": 62,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 100675,
        "area": 66,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 37629,
        "area": 79,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 20274,
        "area": 60,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 84146,
        "area": 151,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 169369,
        "area": 61,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 31742,
        "area": 169,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 17919,
        "area": 117,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 132676,
        "area": 188,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 33144,
        "area": 67,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 107688,
        "area": 156,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 80754,
        "area": 250,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 179573,
        "area": 160,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 108440,
        "area": 129,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 40820,
        "area": 54,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 195420,
        "area": 95,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 6040,
        "area": 176,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 12031,
        "area": 149,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 149146,
        "area": 217,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 50591,
        "area": 167,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 101083,
        "area": 228,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 97238,
        "area": 181,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 151953,
        "area": 95,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 2462,
        "area": 135,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 146480,
        "area": 95,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 54618,
        "area": 91,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 56578,
        "area": 243,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 156495,
        "area": 121,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 37020,
        "area": 59,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 81952,
        "area": 146,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 137434,
        "area": 131,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 53525,
        "area": 115,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 53266,
        "area": 76,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 98531,
        "area": 133,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 174348,
        "area": 174,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 170215,
        "area": 107,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 44786,
        "area": 120,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 29723,
        "area": 75,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 142021,
        "area": 109,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 109463,
        "area": 177,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 174027,
        "area": 167,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 98779,
        "area": 224,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 198088,
        "area": 123,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 156671,
        "area": 157,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 27441,
        "area": 87,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 71935,
        "area": 208,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 47260,
        "area": 209,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 111576,
        "area": 142,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 116886,
        "area": 243,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 185805,
        "area": 56,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 116332,
        "area": 220,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 61578,
        "area": 179,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 76629,
        "area": 232,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 41448,
        "area": 204,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 141059,
        "area": 224,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 113118,
        "area": 197,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 148242,
        "area": 98,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 104862,
        "area": 247,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 153655,
        "area": 246,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 32358,
        "area": 87,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 54420,
        "area": 89,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 181767,
        "area": 153,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 12587,
        "area": 54,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 151227,
        "area": 194,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 73535,
        "area": 111,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 147162,
        "area": 238,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 122336,
        "area": 247,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 43974,
        "area": 69,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 118922,
        "area": 181,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 51347,
        "area": 183,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 37486,
        "area": 75,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 41956,
        "area": 227,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 67676,
        "area": 106,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 4258,
        "area": 182,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 82258,
        "area": 52,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 157381,
        "area": 162,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 171536,
        "area": 199,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 120242,
        "area": 220,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 108145,
        "area": 190,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 125813,
        "area": 58,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 180784,
        "area": 170,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 94498,
        "area": 155,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 116304,
        "area": 147,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 113089,
        "area": 235,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 31448,
        "area": 218,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 162060,
        "area": 79,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 19135,
        "area": 85,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 85387,
        "area": 153,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 35706,
        "area": 144,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 78353,
        "area": 172,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 37111,
        "area": 103,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 1388,
        "area": 176,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 89001,
        "area": 233,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 7798,
        "area": 137,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 158593,
        "area": 239,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 81052,
        "area": 56,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 101600,
        "area": 151,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 74665,
        "area": 138,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 106145,
        "area": 219,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 160305,
        "area": 156,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 33204,
        "area": 161,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 154810,
        "area": 119,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 23930,
        "area": 78,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 21243,
        "area": 174,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 94685,
        "area": 64,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 102148,
        "area": 73,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 132009,
        "area": 151,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 115270,
        "area": 234,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 109265,
        "area": 166,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 167588,
        "area": 86,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 50110,
        "area": 128,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 5180,
        "area": 75,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 131488,
        "area": 113,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 57959,
        "area": 223,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 163069,
        "area": 88,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 31997,
        "area": 151,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 40164,
        "area": 236,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 113000,
        "area": 239,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 120781,
        "area": 164,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 120278,
        "area": 95,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 44978,
        "area": 166,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 178071,
        "area": 225,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 187510,
        "area": 68,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 41498,
        "area": 150,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 104623,
        "area": 158,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 7641,
        "area": 52,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 145597,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 18744,
        "area": 174,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 146828,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 71676,
        "area": 130,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 38520,
        "area": 112,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 33560,
        "area": 158,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 199164,
        "area": 153,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 20734,
        "area": 165,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 174078,
        "area": 111,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 138509,
        "area": 168,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 130878,
        "area": 85,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 189837,
        "area": 125,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 23058,
        "area": 160,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 25087,
        "area": 134,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 29794,
        "area": 148,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 123987,
        "area": 120,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 185820,
        "area": 121,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 48293,
        "area": 77,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 129254,
        "area": 189,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 182696,
        "area": 133,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 132171,
        "area": 75,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 61998,
        "area": 122,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 172447,
        "area": 248,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 141285,
        "area": 94,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 54464,
        "area": 60,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 168347,
        "area": 202,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 30595,
        "area": 208,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 129290,
        "area": 231,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 159298,
        "area": 192,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 118682,
        "area": 231,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 103619,
        "area": 233,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 69303,
        "area": 89,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 349,
        "area": 181,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 48425,
        "area": 79,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 139618,
        "area": 198,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 181554,
        "area": 99,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 50700,
        "area": 104,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 123139,
        "area": 140,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 41969,
        "area": 233,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 55248,
        "area": 88,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 159559,
        "area": 119,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 24736,
        "area": 240,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 121136,
        "area": 172,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 84183,
        "area": 238,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 76849,
        "area": 174,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 68016,
        "area": 74,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 193313,
        "area": 67,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 193147,
        "area": 250,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 43010,
        "area": 249,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 89316,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 157889,
        "area": 128,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 135535,
        "area": 207,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 20681,
        "area": 178,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 14527,
        "area": 219,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 99509,
        "area": 167,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 130401,
        "area": 103,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 146195,
        "area": 144,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 53277,
        "area": 83,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 18352,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 101194,
        "area": 230,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 192822,
        "area": 196,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 40625,
        "area": 174,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 181391,
        "area": 115,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 34326,
        "area": 236,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 48568,
        "area": 211,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 19223,
        "area": 72,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 58018,
        "area": 82,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 13507,
        "area": 182,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 190058,
        "area": 105,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 10263,
        "area": 242,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 116610,
        "area": 228,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 170358,
        "area": 120,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 106127,
        "area": 80,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 74869,
        "area": 204,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 178089,
        "area": 141,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 137540,
        "area": 248,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 186625,
        "area": 64,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 15346,
        "area": 205,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 93750,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 162989,
        "area": 53,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 139413,
        "area": 220,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 36129,
        "area": 211,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 3069,
        "area": 133,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 125019,
        "area": 121,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 4380,
        "area": 205,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 109088,
        "area": 212,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 135511,
        "area": 185,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 103582,
        "area": 166,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 190529,
        "area": 199,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 14775,
        "area": 116,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 136538,
        "area": 124,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 144736,
        "area": 224,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 8112,
        "area": 182,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 33504,
        "area": 197,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 142039,
        "area": 64,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 93115,
        "area": 101,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 84184,
        "area": 234,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 42330,
        "area": 170,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 187440,
        "area": 233,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 131687,
        "area": 152,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 49291,
        "area": 109,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 193610,
        "area": 242,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 98170,
        "area": 55,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 8508,
        "area": 149,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 98410,
        "area": 113,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 40966,
        "area": 139,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 156384,
        "area": 188,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 103836,
        "area": 193,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 91049,
        "area": 243,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 108891,
        "area": 89,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 66740,
        "area": 205,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 42455,
        "area": 206,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 39681,
        "area": 108,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 178551,
        "area": 107,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 79877,
        "area": 99,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 12938,
        "area": 175,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 57188,
        "area": 58,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 164580,
        "area": 158,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 100389,
        "area": 111,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 100561,
        "area": 233,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 51805,
        "area": 83,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 17240,
        "area": 55,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 193106,
        "area": 128,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 192617,
        "area": 91,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 190915,
        "area": 203,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 62106,
        "area": 144,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 98566,
        "area": 183,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 67681,
        "area": 223,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 156874,
        "area": 153,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 49099,
        "area": 236,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 45799,
        "area": 195,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 90306,
        "area": 213,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 15838,
        "area": 137,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 184988,
        "area": 127,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 150627,
        "area": 181,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 99395,
        "area": 174,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 192580,
        "area": 65,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 149240,
        "area": 130,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 38215,
        "area": 215,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 172293,
        "area": 232,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 47244,
        "area": 116,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 136629,
        "area": 191,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 84459,
        "area": 54,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 898,
        "area": 98,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 135344,
        "area": 170,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 199131,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 112402,
        "area": 62,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 96954,
        "area": 225,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 35271,
        "area": 100,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 61394,
        "area": 76,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 181310,
        "area": 125,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 185979,
        "area": 214,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 25132,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 80777,
        "area": 99,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 77651,
        "area": 55,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 65568,
        "area": 209,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 60843,
        "area": 70,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 199919,
        "area": 176,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 179250,
        "area": 89,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 91735,
        "area": 247,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 123564,
        "area": 222,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 50840,
        "area": 63,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 80938,
        "area": 224,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 3403,
        "area": 164,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 26970,
        "area": 190,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 113468,
        "area": 95,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 18762,
        "area": 98,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 61870,
        "area": 224,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 130978,
        "area": 126,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 169721,
        "area": 198,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 148290,
        "area": 151,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 170723,
        "area": 109,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 92514,
        "area": 235,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 157314,
        "area": 138,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 177362,
        "area": 185,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 51562,
        "area": 93,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 93249,
        "area": 200,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 107844,
        "area": 116,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 49952,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 149531,
        "area": 178,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 28545,
        "area": 165,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 181402,
        "area": 156,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 127700,
        "area": 109,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 146958,
        "area": 122,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 175295,
        "area": 73,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 65782,
        "area": 59,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 186458,
        "area": 56,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 172203,
        "area": 63,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 6942,
        "area": 69,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 120928,
        "area": 202,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 64900,
        "area": 180,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 86749,
        "area": 139,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 63300,
        "area": 94,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 104532,
        "area": 118,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 184398,
        "area": 83,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 143843,
        "area": 230,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 91278,
        "area": 161,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 36202,
        "area": 97,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 145444,
        "area": 161,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 188889,
        "area": 173,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 71722,
        "area": 206,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 12223,
        "area": 248,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 157182,
        "area": 136,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 53634,
        "area": 119,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 121875,
        "area": 117,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 137009,
        "area": 77,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 194919,
        "area": 102,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 163275,
        "area": 209,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 17216,
        "area": 236,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 196430,
        "area": 215,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 183114,
        "area": 108,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 55967,
        "area": 244,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 94646,
        "area": 149,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 191799,
        "area": 173,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 185794,
        "area": 104,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 64506,
        "area": 78,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 174109,
        "area": 238,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 31241,
        "area": 111,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 65500,
        "area": 205,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 198996,
        "area": 94,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 55391,
        "area": 52,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 35519,
        "area": 154,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 161547,
        "area": 186,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 197795,
        "area": 61,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 76183,
        "area": 144,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 132469,
        "area": 212,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 113015,
        "area": 130,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 145837,
        "area": 78,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 15813,
        "area": 237,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 126349,
        "area": 71,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 24552,
        "area": 135,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 61941,
        "area": 154,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 61915,
        "area": 247,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 130978,
        "area": 123,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 81505,
        "area": 61,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 118576,
        "area": 112,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 53678,
        "area": 153,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 179418,
        "area": 167,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 14629,
        "area": 99,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 136802,
        "area": 81,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 157359,
        "area": 175,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 20156,
        "area": 109,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 47500,
        "area": 146,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 123864,
        "area": 72,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 21603,
        "area": 59,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 188493,
        "area": 218,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 18835,
        "area": 213,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 188552,
        "area": 86,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 64405,
        "area": 208,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 70019,
        "area": 196,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 145146,
        "area": 205,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 97010,
        "area": 76,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 128527,
        "area": 98,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 164498,
        "area": 103,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 184917,
        "area": 74,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 54793,
        "area": 214,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 170447,
        "area": 124,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 52627,
        "area": 158,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 45124,
        "area": 50,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 128645,
        "area": 166,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 104144,
        "area": 128,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 132423,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 177230,
        "area": 223,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 51497,
        "area": 162,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 107060,
        "area": 178,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 139818,
        "area": 165,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 109128,
        "area": 126,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 110867,
        "area": 95,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 55129,
        "area": 147,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 104142,
        "area": 80,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 83537,
        "area": 134,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 12966,
        "area": 69,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 67581,
        "area": 208,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 93145,
        "area": 233,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 190460,
        "area": 155,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 117149,
        "area": 186,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 116172,
        "area": 131,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 151141,
        "area": 77,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 189809,
        "area": 163,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 40857,
        "area": 132,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 65485,
        "area": 148,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 115352,
        "area": 126,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 34962,
        "area": 141,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 14890,
        "area": 166,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 164570,
        "area": 230,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 81664,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 97528,
        "area": 53,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 20731,
        "area": 117,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 85076,
        "area": 123,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 119108,
        "area": 178,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 143157,
        "area": 79,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 160345,
        "area": 70,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 58999,
        "area": 189,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 131193,
        "area": 210,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 12370,
        "area": 104,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 183949,
        "area": 157,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 144985,
        "area": 59,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 64733,
        "area": 161,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 68200,
        "area": 194,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 118765,
        "area": 156,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 74868,
        "area": 205,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 165352,
        "area": 103,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 106119,
        "area": 185,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 37269,
        "area": 198,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 131449,
        "area": 190,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 75573,
        "area": 116,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 82319,
        "area": 142,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 138686,
        "area": 130,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 162336,
        "area": 213,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 107863,
        "area": 242,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 86006,
        "area": 120,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 97704,
        "area": 193,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 128536,
        "area": 200,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 1074,
        "area": 87,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 67801,
        "area": 186,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 91252,
        "area": 98,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 164658,
        "area": 148,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 169382,
        "area": 112,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 26105,
        "area": 197,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 110993,
        "area": 241,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 183113,
        "area": 92,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 22250,
        "area": 92,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 181701,
        "area": 140,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 26436,
        "area": 101,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 97920,
        "area": 98,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 174087,
        "area": 51,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 24593,
        "area": 208,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 6859,
        "area": 196,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 161596,
        "area": 81,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 75280,
        "area": 67,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 113547,
        "area": 143,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 144002,
        "area": 132,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 43266,
        "area": 62,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 132478,
        "area": 173,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 187354,
        "area": 86,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 17712,
        "area": 193,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 47601,
        "area": 135,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 28907,
        "area": 155,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 134407,
        "area": 248,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 38999,
        "area": 237,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 54500,
        "area": 113,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 48688,
        "area": 196,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 35241,
        "area": 120,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 122302,
        "area": 218,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 71475,
        "area": 147,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 99368,
        "area": 57,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 187191,
        "area": 112,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 103507,
        "area": 177,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 154404,
        "area": 226,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 159522,
        "area": 216,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 45838,
        "area": 95,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 178506,
        "area": 212,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 17621,
        "area": 140,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 117802,
        "area": 157,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 12041,
        "area": 117,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 103102,
        "area": 54,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 41519,
        "area": 154,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 10734,
        "area": 114,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 157752,
        "area": 245,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 106975,
        "area": 67,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 57886,
        "area": 113,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 73650,
        "area": 211,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 2600,
        "area": 56,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 58841,
        "area": 124,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 94304,
        "area": 191,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 64794,
        "area": 235,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 1805,
        "area": 90,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 128768,
        "area": 161,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 149412,
        "area": 234,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 64774,
        "area": 154,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 133672,
        "area": 165,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 62041,
        "area": 188,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 129971,
        "area": 118,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 190646,
        "area": 88,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 138506,
        "area": 115,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 80925,
        "area": 200,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 127938,
        "area": 223,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 185994,
        "area": 78,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 116061,
        "area": 126,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 180996,
        "area": 247,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 139602,
        "area": 245,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 91608,
        "area": 117,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 55433,
        "area": 214,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 32635,
        "area": 95,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 4888,
        "area": 219,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 102831,
        "area": 176,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 47514,
        "area": 160,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 110820,
        "area": 80,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 148399,
        "area": 151,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 179592,
        "area": 87,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 138163,
        "area": 83,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 78850,
        "area": 79,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 79433,
        "area": 63,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 87656,
        "area": 177,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 49272,
        "area": 196,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 173815,
        "area": 140,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 36061,
        "area": 108,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 195024,
        "area": 162,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 76403,
        "area": 89,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 178917,
        "area": 56,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 53876,
        "area": 105,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 183049,
        "area": 130,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 6320,
        "area": 248,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 181527,
        "area": 218,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 79691,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 93550,
        "area": 152,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 176183,
        "area": 130,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 6708,
        "area": 65,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 163713,
        "area": 94,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 192540,
        "area": 147,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 15097,
        "area": 175,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 192914,
        "area": 83,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 48000,
        "area": 188,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 55046,
        "area": 55,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 123171,
        "area": 136,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 88610,
        "area": 166,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 66365,
        "area": 74,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 86423,
        "area": 249,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 35534,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 102585,
        "area": 174,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 199067,
        "area": 207,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 55903,
        "area": 83,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 194896,
        "area": 79,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 157379,
        "area": 88,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 51188,
        "area": 149,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 154014,
        "area": 147,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 27384,
        "area": 210,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 199860,
        "area": 91,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 83561,
        "area": 198,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 168078,
        "area": 137,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 51415,
        "area": 57,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 139884,
        "area": 140,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 94535,
        "area": 163,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 70090,
        "area": 105,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 89908,
        "area": 235,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 123773,
        "area": 189,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 80044,
        "area": 241,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 67542,
        "area": 91,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 183381,
        "area": 103,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 156895,
        "area": 136,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 106701,
        "area": 90,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 30452,
        "area": 54,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 126103,
        "area": 94,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 130547,
        "area": 186,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 179673,
        "area": 139,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 91518,
        "area": 78,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 57156,
        "area": 131,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 30818,
        "area": 228,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 74525,
        "area": 219,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 89907,
        "area": 157,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 96908,
        "area": 223,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 156033,
        "area": 246,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 67303,
        "area": 207,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 13465,
        "area": 72,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 6105,
        "area": 140,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 148053,
        "area": 92,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 163483,
        "area": 178,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 146784,
        "area": 215,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 131856,
        "area": 157,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 189831,
        "area": 212,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 133444,
        "area": 221,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 137431,
        "area": 90,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 199697,
        "area": 197,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 199952,
        "area": 195,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 108513,
        "area": 235,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 175365,
        "area": 167,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 141866,
        "area": 194,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 92700,
        "area": 215,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 68591,
        "area": 228,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 74164,
        "area": 70,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 56392,
        "area": 103,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 168039,
        "area": 223,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 58749,
        "area": 74,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 184382,
        "area": 187,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 136206,
        "area": 128,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 127356,
        "area": 96,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 27356,
        "area": 138,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 176368,
        "area": 81,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 25073,
        "area": 131,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 133838,
        "area": 192,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 145640,
        "area": 77,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 175117,
        "area": 57,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 89164,
        "area": 207,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 104949,
        "area": 52,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 160153,
        "area": 202,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 145705,
        "area": 101,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 165633,
        "area": 164,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 60017,
        "area": 206,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 43818,
        "area": 214,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 66259,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 182113,
        "area": 215,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 75626,
        "area": 50,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 92543,
        "area": 213,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 53142,
        "area": 219,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 35739,
        "area": 142,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 181586,
        "area": 93,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 44083,
        "area": 201,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 74500,
        "area": 188,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 119580,
        "area": 110,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 129349,
        "area": 82,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 133119,
        "area": 201,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 131732,
        "area": 130,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 114832,
        "area": 84,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 168940,
        "area": 112,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 175073,
        "area": 83,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 23777,
        "area": 107,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 152553,
        "area": 151,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 117062,
        "area": 245,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 147329,
        "area": 51,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 137076,
        "area": 208,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 67421,
        "area": 113,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 38744,
        "area": 196,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 141306,
        "area": 235,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 154872,
        "area": 198,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 177159,
        "area": 87,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 130994,
        "area": 194,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 43484,
        "area": 227,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 105765,
        "area": 139,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 43407,
        "area": 218,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 33024,
        "area": 158,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 29153,
        "area": 196,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 85466,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 123839,
        "area": 204,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 158074,
        "area": 237,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 48718,
        "area": 154,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 76229,
        "area": 148,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 104748,
        "area": 53,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 59941,
        "area": 221,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 188040,
        "area": 237,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 119180,
        "area": 101,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 63803,
        "area": 190,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 67767,
        "area": 143,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 31927,
        "area": 64,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 195339,
        "area": 246,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 124757,
        "area": 189,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 84449,
        "area": 217,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 151047,
        "area": 175,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 1384,
        "area": 107,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 39961,
        "area": 140,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 40858,
        "area": 170,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 45920,
        "area": 194,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 31767,
        "area": 223,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 135619,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 189550,
        "area": 81,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 127097,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 16707,
        "area": 50,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 137805,
        "area": 250,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 152265,
        "area": 193,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 4228,
        "area": 237,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 43547,
        "area": 107,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 192807,
        "area": 195,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 122854,
        "area": 50,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 38349,
        "area": 75,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 616,
        "area": 66,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 34164,
        "area": 128,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 52984,
        "area": 176,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 108780,
        "area": 221,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 80827,
        "area": 203,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 69123,
        "area": 225,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 41684,
        "area": 108,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 156411,
        "area": 223,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 44516,
        "area": 223,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 196431,
        "area": 187,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 33175,
        "area": 247,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 81995,
        "area": 131,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 111138,
        "area": 200,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 196262,
        "area": 83,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 142776,
        "area": 197,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 102301,
        "area": 70,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 93136,
        "area": 120,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 196302,
        "area": 73,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 82000,
        "area": 197,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 60398,
        "area": 62,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 127029,
        "area": 203,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 69680,
        "area": 138,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 53469,
        "area": 124,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 120872,
        "area": 193,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 10570,
        "area": 209,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 56130,
        "area": 168,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 62015,
        "area": 61,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 195035,
        "area": 199,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 101873,
        "area": 97,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 25915,
        "area": 118,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 56592,
        "area": 138,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 6330,
        "area": 244,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 193034,
        "area": 241,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 15871,
        "area": 136,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 69733,
        "area": 78,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 166626,
        "area": 97,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 68475,
        "area": 114,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 22526,
        "area": 146,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 99505,
        "area": 121,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 153917,
        "area": 184,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 194388,
        "area": 65,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 1337,
        "area": 250,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 170543,
        "area": 64,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 93559,
        "area": 112,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 51107,
        "area": 103,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 28844,
        "area": 51,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 57451,
        "area": 55,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 115433,
        "area": 179,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 74372,
        "area": 63,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 111775,
        "area": 136,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 16618,
        "area": 238,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 196423,
        "area": 243,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 171583,
        "area": 217,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 183013,
        "area": 80,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 102665,
        "area": 187,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 25172,
        "area": 99,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 4355,
        "area": 137,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 198777,
        "area": 179,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 68731,
        "area": 140,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 162178,
        "area": 186,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 124650,
        "area": 221,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 130534,
        "area": 120,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 50128,
        "area": 152,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 123182,
        "area": 103,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 50727,
        "area": 207,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 116186,
        "area": 215,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 50390,
        "area": 116,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 189540,
        "area": 122,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 107517,
        "area": 196,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 191609,
        "area": 82,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 14586,
        "area": 119,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 113721,
        "area": 99,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 87096,
        "area": 248,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 108310,
        "area": 172,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 44563,
        "area": 106,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 130316,
        "area": 169,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 147855,
        "area": 124,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 199962,
        "area": 187,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 30818,
        "area": 57,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 195661,
        "area": 52,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 64933,
        "area": 172,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 83716,
        "area": 205,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 101026,
        "area": 187,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 141431,
        "area": 90,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 162242,
        "area": 143,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 199029,
        "area": 109,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 191501,
        "area": 137,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 92197,
        "area": 162,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 98420,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 47148,
        "area": 145,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 27421,
        "area": 146,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 189683,
        "area": 86,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 67368,
        "area": 149,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 136521,
        "area": 230,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 174878,
        "area": 140,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 49065,
        "area": 247,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 66875,
        "area": 250,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 191784,
        "area": 88,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 97783,
        "area": 250,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 147120,
        "area": 218,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 19116,
        "area": 126,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 32591,
        "area": 81,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 37399,
        "area": 92,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 183418,
        "area": 202,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 155957,
        "area": 72,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 4396,
        "area": 72,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 26887,
        "area": 70,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 196213,
        "area": 209,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 117714,
        "area": 218,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 79144,
        "area": 202,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 144836,
        "area": 151,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 123009,
        "area": 202,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 71344,
        "area": 171,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 55338,
        "area": 101,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 129822,
        "area": 93,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 15830,
        "area": 197,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 55786,
        "area": 230,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 84066,
        "area": 61,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 26504,
        "area": 135,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 41696,
        "area": 130,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 113536,
        "area": 135,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 170337,
        "area": 131,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 144019,
        "area": 241,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 20635,
        "area": 173,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 6041,
        "area": 196,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 146190,
        "area": 240,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 22376,
        "area": 185,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 159441,
        "area": 137,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 144960,
        "area": 220,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 50005,
        "area": 194,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 139754,
        "area": 199,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 169369,
        "area": 91,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 148960,
        "area": 78,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 144200,
        "area": 133,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 181507,
        "area": 79,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 45612,
        "area": 239,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 137970,
        "area": 224,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 53077,
        "area": 60,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 141555,
        "area": 172,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 5863,
        "area": 185,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 140259,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 40745,
        "area": 141,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 27447,
        "area": 184,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 192512,
        "area": 205,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 27302,
        "area": 179,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 38497,
        "area": 148,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 86654,
        "area": 51,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 112771,
        "area": 86,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 177317,
        "area": 160,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 103758,
        "area": 128,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 143911,
        "area": 124,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 133657,
        "area": 78,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 8915,
        "area": 93,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 171076,
        "area": 73,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Celio Cerqueira",
        "price": 186707,
        "area": 147,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 107805,
        "area": 216,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 174825,
        "area": 165,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 103282,
        "area": 149,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 2796,
        "area": 198,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 61768,
        "area": 241,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Porto",
        "broker": "Carlos Narciso",
        "price": 66603,
        "area": 163,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 146127,
        "area": 97,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Braga",
        "broker": "Jorge Leal",
        "price": 52795,
        "area": 189,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 175976,
        "area": 182,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 85790,
        "area": 210,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 13971,
        "area": 229,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 126616,
        "area": 109,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 124036,
        "area": 133,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 141083,
        "area": 244,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 37136,
        "area": 131,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 194368,
        "area": 135,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 46541,
        "area": 224,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 134347,
        "area": 208,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 47982,
        "area": 231,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Jorge Leal",
        "price": 144237,
        "area": 190,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 115513,
        "area": 203,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 83533,
        "area": 129,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 75666,
        "area": 194,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 138847,
        "area": 55,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Celio Cerqueira",
        "price": 105146,
        "area": 177,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 122626,
        "area": 125,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Carlos Narciso",
        "price": 121725,
        "area": 237,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 169529,
        "area": 157,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 48186,
        "area": 109,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Porto",
        "broker": "Vania Branco",
        "price": 123071,
        "area": 121,
        "isActive": true
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 107860,
        "area": 237,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Porto",
        "broker": "Jorge Leal",
        "price": 141126,
        "area": 213,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Carlos Narciso",
        "price": 22724,
        "area": 114,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Coimbra",
        "broker": "Vania Branco",
        "price": 126532,
        "area": 223,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Matosinhos",
        "broker": "Vania Branco",
        "price": 88527,
        "area": 67,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Vania Branco",
        "price": 133785,
        "area": 180,
        "isActive": false
      },
      {
        "search_type": "for_sale",
        "type": "Land",
        "address": "Coimbra",
        "broker": "Jorge Leal",
        "price": 132852,
        "area": 173,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "Apartment",
        "address": "Braga",
        "broker": "Carlos Narciso",
        "price": 174860,
        "area": 247,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "Apartment",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 34259,
        "area": 207,
        "isActive": true
      },
      {
        "search_type": "for_sale",
        "type": "House",
        "address": "Coimbra",
        "broker": "Celio Cerqueira",
        "price": 129903,
        "area": 97,
        "isActive": false
      },
      {
        "search_type": "for_rent",
        "type": "House",
        "address": "Matosinhos",
        "broker": "Celio Cerqueira",
        "price": 64700,
        "area": 141,
        "isActive": false
      }
        ]
    //endregion

  );
});


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Search your property',
    info : 'Complete widget to help you search or sell your property',
    link : 'widget'
  }

    //region Put more thing here in start page
 /*   {
    name : '#',
    info : '#',
    link : '#'
  }, {
    name : '#',
    info : '#',
    link : '#'
  }*/
    //endregion

  );
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

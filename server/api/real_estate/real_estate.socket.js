/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var RealEstate = require('./real_estate.model');

exports.register = function(socket) {
  RealEstate.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  RealEstate.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('real_estate:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('real_estate:remove', doc);
}
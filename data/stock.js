var events = require('monument').events;

events.on('data:get:stock', function () {
  'use strict';

    events.emit('data:set:stock', {});
});

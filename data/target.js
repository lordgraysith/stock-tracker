var events = require('monument').events;

events.on('data:get:target', function () {
  'use strict';

    events.emit('data:set:target', {});
});

/**
 * Citylist model events
 */

'use strict';

import {EventEmitter} from 'events';
import Citylist from './citylist.model';
var CitylistEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CitylistEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Citylist.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CitylistEvents.emit(event + ':' + doc._id, doc);
    CitylistEvents.emit(event, doc);
  }
}

export default CitylistEvents;

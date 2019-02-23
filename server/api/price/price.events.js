/**
 * Price model events
 */

'use strict';

import {EventEmitter} from 'events';
import Price from './price.model';
var PriceEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PriceEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Price.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PriceEvents.emit(event + ':' + doc._id, doc);
    PriceEvents.emit(event, doc);
  }
}

export default PriceEvents;

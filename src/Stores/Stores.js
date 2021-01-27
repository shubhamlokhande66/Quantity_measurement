
import AppDispatcher from "../Dispatcher/Dispatcher";
import Constants from "../Constant/Constant";
let EventEmitter = require('events').EventEmitter;
// import EventEmitter from ('events').EventEmitter;
let merge = require('merge');

// Internal object of shoes
let _length = {};
let _Volume = {};
let _Tempreture = {};
// Method to load shoes from action data
function ConveterData(data) {
  _length = data.length;
  _Volume = data.Volume;
  _Tempreture = data.Tempreture;
  
}

// Merge our store with Node's Event Emitter
export default function Store() {
let Store = merge(EventEmitter.prototype, {

  // Returns all shoes
    getlength: function() {
    return _length;
  },
    getVolume: function() {
    return _Volume;
    },
    getTempreture: function() {
    return _Tempreture;

  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(payload) {
  let action = payload.action;
  let type,from,to;
  // Define what to do for certain actions
  switch(action.actionType) {
    case Constants.LENGTH:
      case Constants.VOLUME:
        case Constants.TEMPRATURE:
      
      // Call internal method based upon dispatched action
      ConveterData(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  Store.emitChange();

  return true;

});
}

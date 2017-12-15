'uses strict'

var Thermostat = function(){
  this._temperture = 20;
};


Thermostat.prototype.CurrentTemperture = function() {
  return this._temperture;
};

Thermostat.prototype.up = function() {
  this._temperture += 1;
};

Thermostat.prototype.down = function() {
  this._temperture += -1;
};

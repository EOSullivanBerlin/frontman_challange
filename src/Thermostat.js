'uses strict'

var Thermostat = function(){
  this.MINIMUM_TEMP = 10;
  this.POWER_SAVING_ON_MAX_TEMP = 25;
  this.POWER_SAVING_OFF_MAX_TEMP = 32;
  this._temperture = 20;
  this._powerSavingMode = true;
};


Thermostat.prototype.CurrentTemperture = function() {
  return this._temperture;
};

Thermostat.prototype.up = function() {
  if(this.isMaximumTemp()) {
    return;
  }
  this._temperture += 1;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.MINIMUM_TEMP === this._temperture;
};

Thermostat.prototype.isMaximumTemp = function() {
  if (this.isPowerSavingModeOn()){
    return this.POWER_SAVING_ON_MAX_TEMP === this._temperture;
  }
  return this.POWER_SAVING_OFF_MAX_TEMP === this._temperture;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemp()) {
   return;
  }
  this._temperture -= 1;
};

Thermostat.prototype.isPowerSavingModeOn  = function() {
  return this._powerSavingMode;
};

Thermostat.prototype.switchOffPowerSavingMode = function() {
  this._powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSavingMode = function() {
  this._powerSavingMode = true;
};

Thermostat.prototype.reset = function() {
  this._temperture = 20;
};

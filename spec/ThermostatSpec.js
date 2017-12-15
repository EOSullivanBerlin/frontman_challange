'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.CurrentTemperture()).toEqual(20);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i ++) {
      thermostat.down()
    }
    expect(thermostat.CurrentTemperture()).toEqual(10);
  });

  it('has a power saving limit by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('Power saving mode can be switched off', function() {
    it('Switch off power saving mode', function() {
      thermostat.switchOffPowerSavingMode()
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });
  });

  describe('Power saving mode can be switched on', function() {
    it('Switch on power saving mode', function() {
      thermostat.switchOffPowerSavingMode()
      thermostat.switchOnPowerSavingMode()
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperture of 25 degrees', function() {
      for (var i = 0; i < 6; i += 1) {
        thermostat.up();
      }
      expect(thermostat.CurrentTemperture()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperture of 32 degrees', function() {
      thermostat.switchOffPowerSavingMode()
      for (var i= 0; i < 13; i += 1) {
        thermostat.up();
      }
      expect(thermostat.CurrentTemperture()).toEqual(32);
    });
  });

  describe('increase', function() {
    it('the temp goes up by one when up is called', function() {
      thermostat.up();
      expect(thermostat.CurrentTemperture()).toEqual(21);
    });
  });

  describe('decrease', function() {
    it('the temp goes down by one when down is called', function() {
      thermostat.down();
      expect(thermostat.CurrentTemperture()).toEqual(19);
    });
  });


});

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

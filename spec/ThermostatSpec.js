'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.CurrentTemperture()).toEqual(20);
  });

  describe('increase', function() {
    it('', function() {
      thermostat.up();
      expect(thermostat.CurrentTemperture()).toEqual(21);
    });
  });

});

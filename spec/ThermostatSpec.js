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

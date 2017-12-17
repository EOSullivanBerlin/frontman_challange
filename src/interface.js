$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat._temperture);

  $('#temperature-up').click(function() {
    thermostat.up();
  $('#temperature').text(thermostat._temperture);
  })

  $('#temperature-down').click(function() {
  thermostat.down();
  $('#temperature').text(thermostat._temperture);
  })

})

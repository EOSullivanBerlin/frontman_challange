$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp()

  $('#temperature-up').click(function() {
    thermostat.up();
  updateTemp()
  })

  $('#temperature-down').click(function() {
  thermostat.down();
  updateTemp()
  })

  function updateTemp() {
    $('#temperature').text(thermostat._temperture);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemp()
  })

  $('#power-saving-on').click(function() {
    thermostat.switchOnPowerSavingMode()
    $('#power-savng-status').text('on')
    updateTemp();
  })

  $('#power-saving-off').click(function() {
    thermostat.switchOffPowerSavingMode()
    $('#power-savng-status').text('off')
    updateTemp()
  })
})

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

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6e45629d750c096cb392dfcb90f33c03&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })
})

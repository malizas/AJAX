'use strict';

// PART 1: SHOW A FORTUNE
function showFortune(evt) {
  evt.preventDefault();

  $.get('/fortune', response => {
    $('#fortune-text').html(response);
  });
}
$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER
function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};

  $.get(url, formData, (response) => {
    $('#weather-info').html(`Weather forecast for today: ${response.forecast}`);
  });
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS
function orderMelons(evt) {
  evt.preventDefault();

  const formInputs = {
    qty: $('#qty-field').val(),
    melon_type: $('#melon-type-field').val(),
  };

  const url = 'order-melons.json';

  $.post(url, formInputs, (response) => {
    if (response.code === 'ERROR') {
      $('#order-status').addClass('order-error');
      $('#order-status').html(response.msg);
    } else {
      $('#order-status').html(response.msg);
    };
  });
}

$('#order-form').on('submit', orderMelons);

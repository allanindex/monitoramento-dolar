
var dolar_value = document.getElementById('dolar-value');
var dolar_date = document.getElementById('dolar-date');

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(function(response) {
    return response.json();
}).then(function(body) {
   dolar_value.innerHTML += body.USDBRL.high + '<br>';
    dolar_date.innerHTML += body.USDBRL.create_date;
})

let fiveDayForecast;


    fetch('https://api.weather.com/forecast/daily?days=5&units=metric&key=4UDJAHXPMXNFHYDKZ5BXY4FPF')
    .then(response => response.json())
    .then(data => {
        fiveDayForecast = data.forecast.forecastDay;
    })
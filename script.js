const apiKey = 'fd45ec126a7fec597b6f4638e0c2e74d'
const cityInput = document.getElementById('city');
const searchButton = document.querySelector('button');
const temperatureElement = document.getElementById('temperature');
// ... other elements

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract weather data and update HTML elements
      const currentWeather = data.list[0];
      temperatureElement.textContent = `${currentWeather.main.temp}°C`;
      // ... update other elements

      // Use Day.js to format forecast dates
      const forecastDays = data.list.slice(1, 6);
      forecastDays.forEach(forecast => {
        const date = dayjs(forecast.dt * 1000);
        // ... update HTML elements with forecast data and formatted date
      });
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
});
// Create a React app that:
// • Add an input field to enter city name
// • On clicking “Get Weather”, fetch weather data using Axios
// • Display temperature, humidity, and weather description
// • If city is invalid, display error message
// • Show loading message while fetching data
import { useState } from 'react';
import axios from 'axios';
function Pb388() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (event) => {
        setCity(event.target.value);
    }
    const getWeather = () => {
        setLoading(true);
        setError(null);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${
            city}&appid=YOUR_API_KEY&units=metric`)
            .then(response => {
                setWeatherData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("City not found");
                setLoading(false);
            });
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb388</h1>
            <input type="text" placeholder="Enter city name" value={city} onChange={handleChange} />
            <button onClick={getWeather}>Get Weather</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && (
                <div>
                    <h2>Temperature: {weatherData.main.temp} °C</h2>
                    <h2>Humidity: {weatherData.main.humidity} %</h2>
                    <h2>Weather: {weatherData.weather[0].description}</h2>
                </div>
            )}
        </div>
    );
}
export default Pb388;
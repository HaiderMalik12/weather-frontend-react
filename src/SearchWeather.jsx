import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [temprature, setTemprature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  // Make the API CALL to FETCH THE DEFAULT LOCATION WEATHER
  // RENDER THE WEATHER DETAILS
  async function getWeather() {
    const res = await fetch(`http://localhost:3001/api/weather/${location}`);
    const weather = await res.json();

    setCity(weather.city);
    setDate(weather.date);
    setTemprature(weather.temprature);
    setHumidity(weather.humidity);
    setWind(weather.wind);
    setIcon(weather.icon);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
        {/* UPDATE THE WEATHER DETAILS BY CALLING HERE */}
      </form>

      <WeatherDetails
        city={city}
        temprature={temprature}
        date={date}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
};

export default SearchWeather;

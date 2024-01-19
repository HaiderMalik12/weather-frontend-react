import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
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
    setTime(weather.time);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log("SUbmitted!");
          e.preventDefault();
          getWeather();
        }}
      >
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
      </form>

      <WeatherDetails
        time={time}
        city={location}
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

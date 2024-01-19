import { useState } from "react";
import WeatherDetails from "./WeatherDetails";

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");
  const [city, setCity] = useState("Faislabad");
  const [date, setDate] = useState("02/19");
  const [temprature, setTemprature] = useState("48");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

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

      <WeatherDetails city={city} temprature={temprature} />
    </div>
  );
};

export default SearchWeather;

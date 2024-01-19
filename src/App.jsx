import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";
import WeatherDetails from "./WeatherDetails";
import ForeCastList from "./ForeCastList";
import { useState } from "react";

const App = () => {
  const [todayWeather, setWeather] = useState({
    city: "Faisalabad",
    date: "02/19",
    temprature: "48",
    icon: "03d",
    humidity: "",
    wind: "",
  });

  //FETCH THE WEATHER DETAIL FROM THE BACKEND API
  // SET THE WEATHER BY CALLING THE SETWEATHER
  // RE-RENDER THE WEATHER DETAILS COMPONET HERE
  return (
    <div>
      <h1>Weather App</h1>
      <SearchWeather />
      <WeatherDetails
        city={todayWeather.city}
        temprature={todayWeather.temprature}
      />
      <ForeCastList />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

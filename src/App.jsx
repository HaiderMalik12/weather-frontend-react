import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";
import WeatherDetails from "./WeatherDetails";
import ForeCastList from "./ForeCastList";

const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchWeather />
      <WeatherDetails city="Faisalabad" temprature="28 Degree" />
      <ForeCastList />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

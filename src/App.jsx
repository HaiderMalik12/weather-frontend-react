import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";
import ForeCastList from "./ForeCastList";

const App = () => {
  //FETCH THE WEATHER DETAIL FROM THE BACKEND API ON DEFAULTE WEATHER DETAILS
  // SET THE WEATHER BY CALLING THE SETWEATHER
  // RE-RENDER THE WEATHER DETAILS COMPONENT HERE
  return (
    <div>
      <h1>Weather App</h1>
      <SearchWeather />

      <ForeCastList />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

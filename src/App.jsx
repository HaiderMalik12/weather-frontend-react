import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchWeather />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

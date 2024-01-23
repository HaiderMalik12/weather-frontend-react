import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forecast from "./Forecast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchWeather />} />
          <Route path="/forecast/:search" element={<Forecast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

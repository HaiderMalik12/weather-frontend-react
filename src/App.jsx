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

export default App
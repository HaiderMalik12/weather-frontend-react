import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <h2 className="header">Weather App</h2>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchWeather />}></Route>
          <Route path="/forecast/:location" element={<SearchWeather />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

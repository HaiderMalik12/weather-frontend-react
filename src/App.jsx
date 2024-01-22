import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <h2 className="header">Weather App</h2>
        </Container>
      </Navbar>
      <Container className="p-3">
        <SearchWeather />
      </Container>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

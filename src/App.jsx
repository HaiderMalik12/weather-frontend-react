import { createRoot } from "react-dom/client";
import SearchWeather from "./SearchWeather";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Container className="p-3">
      <SearchWeather />
    </Container>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

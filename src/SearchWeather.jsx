import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import ForeCastDay from "./ForeCastDay";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  //set forecast array
  const [forecast, setForcast] = useState([]);

  // Make the API CALL to FETCH THE DEFAULT LOCATION WEATHER
  // RENDER THE WEATHER DETAILS
  async function getWeather() {
    const res = await fetch(`http://localhost:3001/api/weather/${location}`);
    const weather = await res.json();

    setCity(weather.city);
    setDate(weather.date);
    setTemperature(weather.temprature);
    setHumidity(weather.humidity);
    setWind(weather.wind);
    setIcon(weather.icon);
    setTime(weather.time);
    setForcast(weather.forecast);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Form
            onSubmit={(e) => {
              console.log("SUbmitted!");
              e.preventDefault();
              getWeather();
            }}
          >
            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Control
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control-sm"
                value={location}
                placeholder="Enter Location"
              />
            </Form.Group>
            <Button className="float-right" variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
        <Col>
          <WeatherDetails
            time={time}
            city={location}
            temperature={temperature}
            date={date}
            humidity={humidity}
            wind={wind}
            icon={icon}
          />
        </Col>
      </Row>

      <ForeCastDay forecast={forecast} />
    </Container>
  );
};

export default SearchWeather;

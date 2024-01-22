import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import ForeCastDay from "./ForeCastDay";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temprature, setTemprature] = useState("");
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
    setTemprature(weather.temprature);
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
          <Card>
            <Card.Body>
              <Card.Title>
                {location} {temprature} &deg;{" "}
                <img
                  src={icon}
                  alt="Weather data by WeatherAPI.com"
                  border="0"
                />
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                12 AM{time}
              </Card.Subtitle>
              <Card.Text>
                <p>{date}</p>
                <p>Wind: {wind}</p>
                <p>Humidity {humidity}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <WeatherDetails
        time={time}
        city={location}
        temprature={temprature}
        date={date}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />

      {forecast.map((f, index) => {
        return (
          <div key={index}>
            <h2>{f.date}</h2>
            {f.hours.map((hour, index) => {
              return (
                <ForeCastDay
                  key={index}
                  time={hour.time}
                  humidity={hour.humidity}
                  temperature={hour.temperature}
                  icon={hour.icon}
                />
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};

export default SearchWeather;

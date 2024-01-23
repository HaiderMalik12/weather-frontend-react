import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import ForeCastDay from "./ForeCastDay";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TimeSliderComponent from "./TimeSlider";
import Card from "react-bootstrap/Card";

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

  const [isLocationInvalid, setIsLocationInvalid] = useState(false);

  // Make the API CALL to FETCH THE DEFAULT LOCATION WEATHER
  // RENDER THE WEATHER DETAILS
  async function getWeather() {
    if (location.trim() === "") {
      setIsLocationInvalid(true);
    } else {
      setIsLocationInvalid(false);
      // Continue with your weather fetching logic
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
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    // <Container className="p-3">
    //   <Row>
    //     <Col>
    //       <Form
    //         onSubmit={(e) => {
    //           e.preventDefault();
    //           getWeather();
    //         }}
    //       >
    //         <Form.Group className="mb-3" controlId="formLocation">
    //           <Form.Control
    //             onChange={(e) => {
    //               setLocation(e.target.value);
    //               setIsLocationInvalid(false); // Reset the validation when the user types
    //             }}
    //             type="text"
    //             className="form-control-sm"
    //             value={location}
    //             placeholder="Enter City"
    //             isInvalid={isLocationInvalid}
    //             required
    //           />
    //         </Form.Group>
    //         <Button className="float-right" variant="primary" type="submit">
    //           Search
    //         </Button>
    //       </Form>
    //     </Col>
    //     <Col>
    //       <WeatherDetails
    //         time={time}
    //         city={city}
    //         temperature={temperature}
    //         date={date}
    //         humidity={humidity}
    //         wind={wind}
    //         icon={icon}
    //       />
    //     </Col>
    //   </Row>

    //   {/* <ForeCastDay forecast={forecast} /> */}

    //   {/* <TimeSliderComponent timeRange={{ min: 0, max: 24 }} /> */}
    // </Container>

    // <div className="container">
    //   <div className="row justify-content-center">
    //     <div className="col-md-6">
    //       {/* Weather Card */}
    //       <div className="card weather-card">
    //         <h5 className="card-title">Weather Information</h5>
    //         {/* Add your dynamic data bindings here */}
    //         <p className="card-text">Temperature: 25°C</p>
    //         <p className="card-text">
    //           Icon: <img src="icon.png" alt="Weather Icon" />
    //         </p>
    //         <p className="card-text">Humidity: 60%</p>
    //         <p className="card-text">Date: January 23, 2024</p>
    //         <p className="card-text">Wind: 10 km/h</p>
    //         <p className="card-text">Time: 12:30 PM</p>
    //       </div>

    //       {/* Weather Search Form */}
    //       <form>
    //         <div className="mb-3">
    //           <label htmlFor="locationInput" className="form-label">
    //             Enter Location:
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="locationInput"
    //             placeholder="E.g., City, Country"
    //           />
    //         </div>
    //         <button type="submit" className="btn btn-primary">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          {/* Weather Card */}
          <Card className="weather-card">
            <Card.Title>Weather Information</Card.Title>
            {/* Add your dynamic data bindings here */}
            <Card.Text>Temperature: 25°C</Card.Text>
            <Card.Text>
              Icon: <img src="icon.png" alt="Weather Icon" />
            </Card.Text>
            <Card.Text>Humidity: 60%</Card.Text>
            <Card.Text>Date: January 23, 2024</Card.Text>
            <Card.Text>Wind: 10 km/h</Card.Text>
            <Card.Text>Time: 12:30 PM</Card.Text>
          </Card>

          {/* Weather Search Form */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="locationInput">Enter Location:</Form.Label>
              <Form.Control
                type="text"
                id="locationInput"
                placeholder="E.g., City, Country"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchWeather;

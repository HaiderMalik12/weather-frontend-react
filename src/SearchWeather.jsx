import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const apiUrl = import.meta.env.VITE_API_URL;

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);

  //set forecast array
  // const [forecast, setForcast] = useState([]);

  const [isLocationInvalid, setIsLocationInvalid] = useState(false);

  // Make the API CALL to FETCH THE DEFAULT LOCATION WEATHER
  // RENDER THE WEATHER DETAILS
  async function getWeather() {
    try {
      if (location.trim() === "") {
        setIsLocationInvalid(true);
      } else {
        setIsLocationInvalid(false);
        setLoading(true);
        // Continue with your weather fetching logic
        const res = await fetch(`${apiUrl}/api/weather/${location}`);
        const weather = await res.json();

        setCity(weather.city);
        setDate(weather.date);
        setTemperature(weather.temprature);
        setHumidity(weather.humidity);
        setWind(weather.wind);
        setIcon(weather.icon);
        setTime(weather.time);
        // setForcast(weather.forecast);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    //   {/* <ForeCastDay forecast={forecast} /> */}

    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          {loading ? ( // Conditionally render the spinner while loading
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <>
              <WeatherDetails
                time={time}
                city={city}
                temperature={temperature}
                date={date}
                humidity={humidity}
                wind={wind}
                icon={icon}
              />

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  getWeather();
                }}
              >
                <Form.Group className="mb-3" style={{ display: "flex" }}>
                  <Form.Control
                    type="text"
                    id="locationInput"
                    placeholder="Search City"
                    style={{ flex: "1" }}
                    value={location}
                    isInvalid={isLocationInvalid}
                    required
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setIsLocationInvalid(false); // Reset the validation when the user types
                    }}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#42A5F5",
                      border: "1px solid white",
                    }}
                  >
                    Search
                  </Button>
                </Form.Group>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchWeather;

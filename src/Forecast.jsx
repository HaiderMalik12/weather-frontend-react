import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TimeSlider from "./TimeSlider";
import { Container, Row, Col, Form } from "react-bootstrap";
import WeatherDetails from "./WeatherDetails";

const Forecast = () => {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  const [forecast, setForcast] = useState([]);
  const [selectedTime, setSelectedTime] = useState(12); // Default selected time

  const { search } = useParams();

  async function getForecast() {
    const res = await fetch(`http://localhost:3001/api/forecast/${search}`);
    const weather = await res.json();

    console.log(JSON.stringify(weather));

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
    getForecast();
  }, []);

  useEffect(() => {
    console.log("When selected time change do logic here", selectedTime);

    console.log(forecast);

    // fetch the data from the forecast array or filter
    // the record based on selected time

    //convert time to number or I can use the momentjs library
    // match the time

    // set the state by setting up variables
  }, [selectedTime]);

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value, 10));
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <WeatherDetails
              time={time}
              city={city}
              temperature={temperature}
              date={date}
              humidity={humidity}
              wind={wind}
              icon={icon}
            />

            <Container>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Form.Text className="text-center">
                    <h4 style={{ color: "#42A5F5" }}>{selectedTime}:00</h4>
                  </Form.Text>
                  <Form.Range
                    style={{ color: "#42A5F5" }}
                    type="range"
                    min={0}
                    max={23}
                    step={1}
                    value={selectedTime}
                    onChange={handleTimeChange}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Forecast;

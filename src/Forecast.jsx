import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import moment from "moment";

import WeatherDetails from "./WeatherDetails";
import ErrorBoundary from "./ErrorBoundary";

const Forecast = () => {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [forecast, setForecast] = useState({});
  const [selectedTime, setSelectedTime] = useState(3);
  const [loading, setLoading] = useState(true);

  const { search } = useParams();

  async function getForecast() {
    try {
      const res = await fetch(`http://localhost:3001/api/forecast/${search}`);
      const weather = await res.json();

      setCity(weather.city);
      setDate(weather.date);
      setTemperature(weather.temperature);
      setHumidity(weather.humidity);
      setWind(weather.wind);
      setIcon(weather.icon);
      setTime(weather.time);
      setForecast(weather.forecast);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getForecast();
  }, [search]);

  useEffect(() => {
    const hoursOnly = getHours(selectedTime);

    if (forecast.hours && forecast.hours.length) {
      const selectedForecast = forecast.hours.find((h) => {
        return h.hoursInNumber === hoursOnly;
      });
      if (selectedForecast) {
        setTemperature(selectedForecast.temperature);
        setHumidity(selectedForecast.humidity);
        setIcon(selectedForecast.icon);
        setTime(selectedForecast.time);
      } else {
        // Handle the case when forecast.hours is not available or empty
        console.warn("No hours data available in the forecast.");
      }
    }
  }, [selectedTime, forecast]);

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value, 10));
  };

  // Function to convert 24-hour time to 12-hour time using moment
  function convertTo12HourFormat(time24) {
    const timeMoment = moment(`${time24}:00`, "HH:mm:ss");
    return timeMoment.format("hh:mm A");
  }

  function getHours(time24) {
    const timeMoment = moment(`${time24}:00`, "HH:mm:ss");
    const hoursOnly = timeMoment.format("HH");
    return hoursOnly;
  }
  return (
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

              <Container>
                <Row className="justify-content-center">
                  <Col md={12}>
                    <Form.Text className="text-center">
                      <h4 style={{ color: "#42A5F5" }}>
                        {convertTo12HourFormat(selectedTime)}
                      </h4>
                    </Form.Text>
                    <Form.Range
                      style={{ color: "#42A5F5" }}
                      type="range"
                      min={0}
                      max={24}
                      step={1}
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                  </Col>
                </Row>
              </Container>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

function ForecastErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Forecast {...props} />
    </ErrorBoundary>
  );
}

export default ForecastErrorBoundary;

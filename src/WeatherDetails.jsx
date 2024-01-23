import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const WeatherDetails = ({
  city,
  humidity,
  temperature,
  time,
  date,
  icon,
  wind,
}) => {
  return (
    <Link to={`/forecast/${city}`} style={{ textDecoration: "none" }}>
      {/* <Card>
        <Card.Body>
          <Card.Title>
            <h4>
              {city} {temperature} &deg;{" "}
            </h4>
            <img src={icon} alt="Weather data by WeatherAPI.com" border="0" />
          </Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <p>{date}</p>
                <p> {time}</p>
              </Col>
              <Col>
                <p>Wind: {wind}</p>
                <p>Humidity: {humidity}</p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card> */}

      <Card className="weather-card">
        <Card.Title>Weather Information</Card.Title>
        <Card.Text>Temperature: {temperature} &deg;</Card.Text>
        <Card.Text>
          <img src={icon} alt="Weather Icon" />
        </Card.Text>
        <Card.Text>Humidity: {humidity}%</Card.Text>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Wind: {wind} km/h</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
      </Card>
    </Link>
  );
};

export default WeatherDetails;

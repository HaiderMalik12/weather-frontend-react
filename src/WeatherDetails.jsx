import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
    <Card>
      <Card.Body>
        <Card.Title>
          <p>
            {city} {temperature} &deg;{" "}
          </p>
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
    </Card>
  );
};

export default WeatherDetails;

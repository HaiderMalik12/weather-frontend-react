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
            {" "}
            {city} {temperature} &deg;{" "}
          </p>

          <img src={icon} alt="Weather data by WeatherAPI.com" border="0" />
        </Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <p> 12 AM{time}</p>
              <p>{date}</p>
            </Col>
            <Col>
              <p>Wind: {wind}</p>
              <p>Humidity: {humidity}</p>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
    // <div>
    //   <h2>{props.city}</h2>
    //   <p>Temprature: {props.temprature}</p>
    //   <p>Time: {props.time}</p>
    //   <p>Date: {props.date}</p>
    //   <p>Humidy: {props.humidity}</p>
    //   <p>Wind Degree: {props.wind}</p>
    //   <img src={props.icon} alt="Weather data by WeatherAPI.com" border="0" />
    // </div>
  );
};

export default WeatherDetails;

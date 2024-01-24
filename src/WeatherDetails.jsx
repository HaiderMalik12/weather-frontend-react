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
      <Card
        className="weather-card"
        style={{
          backgroundColor: "#42A5F5",
          color: "white",
          border: "1px solid white",
        }}
      >
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

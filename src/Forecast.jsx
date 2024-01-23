import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Forecast = () => {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  const [forecast, setForcast] = useState([]);

  const { search } = useParams();

  async function getForecast() {
    // Continue with your weather fetching logic
    // get the city from the parameters
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

  return <div>ForeCast</div>;
};

export default Forecast;

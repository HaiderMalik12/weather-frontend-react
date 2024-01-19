const WeatherDetails = (props) => {
  return (
    <div>
      <h2>{props.city}</h2>
      <p>Temprature: {props.temprature}</p>
      <p>Time: {props.time}</p>
      <p>Date: {props.date}</p>
      <p>Humidy: {props.humidity}</p>
      <p>Wind Degree: {props.wind}</p>
      <img src={props.icon} alt="Weather data by WeatherAPI.com" border="0" />
    </div>
  );
};

export default WeatherDetails;

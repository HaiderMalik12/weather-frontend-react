const WeatherDetails = (props) => {
  return (
    <div>
      <h2>{props.city}</h2>
      <p>{props.temprature}</p>
      <p>
        {props.date} / 41 {props.humidity} {props.wind} {props.icon}
      </p>
    </div>
  );
};

export default WeatherDetails;

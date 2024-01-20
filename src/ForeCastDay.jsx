const ForeCastDay = ({ time, humidity, temperature, icon }) => {
  return (
    <div>
      <p>Time: {time}</p>
      <p>Humidity: {humidity}</p>
      <p>Temperature: {temperature}</p>
      <img src={icon} alt="weather icon" />
    </div>
  );
};

export default ForeCastDay;

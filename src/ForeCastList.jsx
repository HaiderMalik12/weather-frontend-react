import ForeCastItem from "./ForeCastItem";

const ForeCastList = () => {
  return (
    <div>
      <h2>ForeCast Details</h2>
      <ForeCastItem time="12:00 AM" humid="Cloudy" temprature="48 Degree" />
      <ForeCastItem time="1:00 AM" humid="Cloudy" temprature="58 Degree" />
      <ForeCastItem time="2:00 AM" humid="Cloudy" temprature="78 Degree" />
    </div>
  );
};

export default ForeCastList;

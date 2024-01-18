const ForeCastItem = (props) => {
  return (
    <div>
      <p>{props.time}</p>
      <p>{props.humid}</p>
      <p>{props.temprature}</p>
      <hr />
    </div>
  );
};

export default ForeCastItem;

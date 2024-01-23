import { useState } from "react";

const TimeSlider = () => {
  const [rangeval, setRangeval] = useState(null);

  return (
    <div>
      <h4> {rangeval}AM</h4>
      <input
        type="range"
        className="custom-range"
        min="1"
        max="24"
        onChange={(event) => setRangeval(event.target.value)}
      />
    </div>
  );
};

export default TimeSlider;

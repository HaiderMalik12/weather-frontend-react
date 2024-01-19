import { useState } from "react";

const SearchWeather = () => {
  const [location, setLocation] = useState("Faisalabad");

  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchWeather;

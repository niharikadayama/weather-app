import React from "react";
import { Images } from "constant/images";
import "./style.scss";

interface Summary {
  temp: number;
  day: string;
}

function WeatherSummary(props: Summary) {
  const { temp, day } = props;
  const { cloud } = Images;
  return (
    <div className="rectangle">
      <div className="rectangle-info">
        <div className="blur"></div>
        <p>
          {temp}
          <span>&#8451;</span>
        </p>
        <img src={cloud} alt={"Weather"} />
        <p>{day}</p>
      </div>
    </div>
  );
}

export default WeatherSummary;

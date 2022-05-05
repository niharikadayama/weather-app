import React from "react";
import "./style.scss";

interface Summary {
  temp: number;
  img: string;
  day: string;
}

function WeatherSummary(props: Summary) {
  const { temp, day, img } = props;
  return (
    <div className="rectangle">
      <div className="rectangle-info">
        <div className="blur"></div>
        <p>
          {temp}
          <span>&#8451;</span>
        </p>
        <img src={`https:${img}`} alt={"Weather"} />
        <p>{day}</p>
      </div>
    </div>
  );
}

export default WeatherSummary;

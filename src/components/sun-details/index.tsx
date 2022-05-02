import React from "react";
import { Images } from "constant/images";
import "./style.scss";

interface sunDetails {
  title: string;
  time1: string;
  time2: string;
  styleExist: boolean;
}

function SunDetails(prop: sunDetails) {
  const { title, time1, time2, styleExist } = prop;
  const { hourHand, secondHand } = Images;
  const style = styleExist ? "sun-details" : "golden-hour";
  return (
    <div className={style}>
      <p className="title">{title}</p>
      <div className="clock">
        <div className="clock-img">
          <hr></hr>
          <img src={hourHand} alt="hour-hand" className="hour-hand" />
          <img src={secondHand} alt="second-hand" className="second-hand" />
        </div>
        <div>
          <p className="t-1">{time1}</p>
          <p className="t-2">{time2}</p>
        </div>
      </div>
    </div>
  );
}

export default SunDetails;

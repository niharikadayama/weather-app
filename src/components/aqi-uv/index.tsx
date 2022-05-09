import React from "react";
import { Images } from "constant/images";
import "./style.scss";

interface aqi_uv {
  title: string;
  quantity: string | number;
  rate: string;
  dotPosition: string;
}

function AQI_UV(prop: aqi_uv) {
  const { title, quantity, rate, dotPosition } = prop;
  const { vector1, vector2, vector3, vector4, vector5, vector6, ellipse } =
    Images;
  return (
    <div className="aqi-uv">
      <p className="title">{title}</p>
      <div className="meter">
        <img src={vector1} alt="vector1" className="vector1" />
        <img src={vector2} alt="vector2" className="vector2" />
        <img src={vector3} alt="vector3" className="vector3" />
        <img src={vector4} alt="vector4" className="vector4" />
        <img src={vector5} alt="vector5" className="vector5" />
        <img src={vector6} alt="vector6" className="vector6" />
        <p className="rate">
          {quantity}
          <br></br>
          <span>{rate}</span>
        </p>
        <img src={ellipse} alt="dot" className={dotPosition} />
      </div>
    </div>
  );
}

export default AQI_UV;

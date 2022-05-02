import React from "react";
import "./style.scss";

interface weatherDetails {
  image: any;
  imageDetail: string;
  title: string;
  info: string;
}

function WeatherDetail(prop: weatherDetails) {
  const { image, imageDetail, title, info } = prop;
  return (
    <div className="weather-detail">
      <img src={image} alt={imageDetail} />
      <p>{title}</p>
      <p>{info}</p>
    </div>
  );
}

export default WeatherDetail;

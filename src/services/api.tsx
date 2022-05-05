import { useState } from "react";
import axios from "axios";

const API = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const getData = async () => {
    const savePositionToState = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };
    await window.navigator.geolocation.getCurrentPosition(savePositionToState);
    try {
      let request = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=e9c3d5ed7b4c467984a94332222504&q=${latitude},${longitude}&days=5&aqi=yes&alerts=no`
      );
      return request.data;
    } catch (error) {
      console.log(error);
    }
    return;
  };

  const submitRequest = async (location) => {
    try {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=e9c3d5ed7b4c467984a94332222504&q=${location}&days=5&aqi=yes&alerts=no`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getData,
    submitRequest,
  };
};

export default API;

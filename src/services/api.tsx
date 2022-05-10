import axios from "axios";

const getWeather = async (location) => {
  try {
    let request = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=e9c3d5ed7b4c467984a94332222504&q=${location.latitude},${location.longitude}&days=5&aqi=yes&alerts=no`
    );
    return request.data;
  } catch (error) {
    console.log(error);
  }
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

export const WeatherService = {
  getWeather,
  submitRequest,
};

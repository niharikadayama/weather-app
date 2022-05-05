import React, { useEffect, useState } from "react";
import moment from "moment";
import { WeatherDetail, WeatherSummary, SunDetails, AQI_UV } from "components";
import API from "services/api";
import { Images } from "constant/images";
import "./style.scss";

function Homepage() {
  const [isLoading, setLoading] = useState(true);
  const [currentLocationDetails, setCurrentLocationDetails] = useState(null);
  const [searchedLocationDetails, setSearchedLocationDetails] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState();
  const [isSearched, setIsSearched] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const { getData, submitRequest } = API();
  useEffect(() => {
    getData().then((data) => {
      setCurrentLocationDetails(data);
      setLoading(false);
    });
  }, [getData]);
  const handleChange = (e) => {
    setSearchedLocation(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const searchedData = await submitRequest(searchedLocation);
    setSearchedLocationDetails(searchedData);
    setIsSearched(true);
  };
  const { direction, water, rainy, next, search } = Images;
  return (
    <>
      {isLoading || currentLocationDetails === null ? (
        <p>Loading...</p>
      ) : !isSearched ? (
        <div className="container">
          <section className="card">
            <div className="left">
              <div className="left-row-1">
                <div className="moon-cloud">
                  <img
                    src={`https:${currentLocationDetails.current.condition.icon}`}
                    alt="moon"
                    className="moon"
                  />
                </div>
                <div className="temp-converter">
                  <button
                    className="fahrenheit"
                    onClick={() => setIsFahrenheit(true)}
                  >
                    <span>F</span>
                  </button>
                  <button
                    className="celcius"
                    onClick={() => setIsFahrenheit(false)}
                  >
                    C
                  </button>
                </div>
              </div>
              <div className="left-row-2">
                {!isFahrenheit && (
                  <p className="temp">
                    {Math.round(currentLocationDetails.current.temp_c)}
                    <span className="degree_celsius">&#8451;</span>
                  </p>
                )}
                {isFahrenheit && (
                  <p className="temp">
                    {Math.round(currentLocationDetails.current.temp_f)}
                    <span className="degree_fahrenheit">&#8457;</span>
                  </p>
                )}
                <p className="date">
                  {moment(currentLocationDetails.location.localtime).format(
                    "Do MMM YY"
                  )}
                </p>
                <div className="date-time">
                  <p>
                    {moment(currentLocationDetails.location.localtime).format(
                      "dddd"
                    )}
                  </p>
                  <p>|</p>
                  <p>
                    {moment(currentLocationDetails.location.localtime).format(
                      "LT"
                    )}
                  </p>
                </div>
              </div>
              <div className="left-row-3">
                <WeatherDetail
                  image={direction}
                  imageDetail={"Wind"}
                  title={"Wind"}
                  info={`${Math.round(
                    currentLocationDetails.current.wind_kph
                  )} km/h`}
                />
                <p className="separator">|</p>
                <WeatherDetail
                  image={water}
                  imageDetail={"Hum"}
                  title={"Hum"}
                  info={`${currentLocationDetails.current.humidity}%`}
                />
                <p className="separator">|</p>
                <WeatherDetail
                  image={rainy}
                  imageDetail={"Rain"}
                  title={"Rain"}
                  info={`${currentLocationDetails.current.precip_in} mm`}
                />
              </div>
              <div className="left-row-4">
                <div className="weather-summary">
                  <WeatherSummary
                    temp={Math.round(
                      currentLocationDetails.forecast.forecastday[0].day
                        .avgtemp_c
                    )}
                    img={
                      currentLocationDetails.forecast.forecastday[0].day
                        .condition.icon
                    }
                    day={moment(
                      currentLocationDetails.forecast.forecastday[0].date
                    ).format("ddd")}
                  />
                  <WeatherSummary
                    temp={Math.round(
                      currentLocationDetails.forecast.forecastday[1].day
                        .avgtemp_c
                    )}
                    img={
                      currentLocationDetails.forecast.forecastday[1].day
                        .condition.icon
                    }
                    day={moment(
                      currentLocationDetails.forecast.forecastday[1].date
                    ).format("ddd")}
                  />
                  <WeatherSummary
                    temp={Math.round(
                      currentLocationDetails.forecast.forecastday[2].day
                        .avgtemp_c
                    )}
                    img={
                      currentLocationDetails.forecast.forecastday[2].day
                        .condition.icon
                    }
                    day={moment(
                      currentLocationDetails.forecast.forecastday[2].date
                    ).format("ddd")}
                  />
                </div>
                <button className="forward-arrow">
                  <img src={next} alt="forward-arrow" />
                </button>
              </div>
            </div>
            <div className="right">
              <div className="right-row-1">
                <form onSubmit={onSubmit}>
                  <input
                    aria-label="location"
                    type="text"
                    value={searchedLocation}
                    placeholder={currentLocationDetails.location.name}
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="submit">
                    <img src={search} alt="search-button" />
                  </button>
                </form>
                {/* {isError && <p>No such city</p>} */}
              </div>
              <div className="right-row-2">
                <SunDetails
                  title="Sunrise"
                  time1={moment(
                    `${currentLocationDetails.forecast.forecastday[0].date} ${currentLocationDetails.forecast.forecastday[0].astro.sunrise}`
                  ).format("h:mm")}
                  time2={moment(
                    `${currentLocationDetails.forecast.forecastday[0].date} ${currentLocationDetails.forecast.forecastday[0].astro.sunrise}`
                  ).format("h:mm")}
                  styleExist={true}
                />
                <SunDetails
                  title="Golden Hour"
                  time1={moment(
                    `${currentLocationDetails.forecast.forecastday[0].date} ${currentLocationDetails.forecast.forecastday[0].astro.sunrise}`
                  ).format("h:mm")}
                  time2={moment(
                    `${currentLocationDetails.forecast.forecastday[0].date} ${currentLocationDetails.forecast.forecastday[0].astro.sunset}`
                  ).format("h:mm")}
                  styleExist={false}
                />
                <SunDetails
                  title="Sunset"
                  time1={moment(
                    `${currentLocationDetails.forecast.forecastday[0].date} ${currentLocationDetails.forecast.forecastday[0].astro.sunset}`
                  ).format("h:mm")}
                  time2={moment(
                    `${currentLocationDetails.forecast.forecastday[0].date} ${currentLocationDetails.forecast.forecastday[0].astro.sunset}`
                  ).format("h:mm")}
                  styleExist={true}
                />
              </div>
              <hr></hr>
              <div className="right-row-3">
                <AQI_UV
                  title={"Air Quality"}
                  quantity={2}
                  rate={"Moderate"}
                  dotPosition={"ball-aqi"}
                />
                <AQI_UV
                  title={"UV Index"}
                  quantity={"6 / 10"}
                  rate={"High"}
                  dotPosition={"ball-uv"}
                />
              </div>
            </div>
          </section>
        </div>
      ) : isSearched && searchedLocationDetails !== null ? (
        <div className="container">
          <section className="card">
            <div className="left">
              <div className="left-row-1">
                <div className="moon-cloud">
                  <img
                    src={`https:${currentLocationDetails.current.condition.icon}`}
                    alt="moon"
                    className="moon"
                  />
                </div>
                <div className="temp-converter">
                  <button
                    className="fahrenheit"
                    onClick={() => setIsFahrenheit(true)}
                  >
                    <span>F</span>
                  </button>
                  <button
                    className="celcius"
                    onClick={() => setIsFahrenheit(false)}
                  >
                    C
                  </button>
                </div>
              </div>
              <div className="left-row-2">
                {!isFahrenheit && (
                  <p className="temp">
                    {Math.round(searchedLocationDetails.current.temp_c)}
                    <span className="degree_celsius">&#8451;</span>
                  </p>
                )}
                {isFahrenheit && (
                  <p className="temp">
                    {Math.round(searchedLocationDetails.current.temp_f)}
                    <span className="degree_fahrenheit">&#8457;</span>
                  </p>
                )}
                <p className="date">
                  {moment(searchedLocationDetails.location.localtime).format(
                    "Do MMM YY"
                  )}
                </p>
                <div className="date-time">
                  <p>
                    {moment(searchedLocationDetails.location.localtime).format(
                      "dddd"
                    )}
                  </p>
                  <p>|</p>
                  <p>
                    {moment(searchedLocationDetails.location.localtime).format(
                      "LT"
                    )}
                  </p>
                </div>
              </div>
              <div className="left-row-3">
                <WeatherDetail
                  image={direction}
                  imageDetail={"Wind"}
                  title={"Wind"}
                  info={`${Math.round(
                    searchedLocationDetails.current.wind_kph
                  )} km/h`}
                />
                <p className="separator">|</p>
                <WeatherDetail
                  image={water}
                  imageDetail={"Hum"}
                  title={"Hum"}
                  info={`${searchedLocationDetails.current.humidity}%`}
                />
                <p className="separator">|</p>
                <WeatherDetail
                  image={rainy}
                  imageDetail={"Rain"}
                  title={"Rain"}
                  info={`${searchedLocationDetails.current.precip_in} mm`}
                />
              </div>
              <div className="left-row-4">
                <div className="weather-summary">
                  <WeatherSummary
                    temp={Math.round(
                      searchedLocationDetails.forecast.forecastday[0].day
                        .avgtemp_c
                    )}
                    img={
                      searchedLocationDetails.forecast.forecastday[0].day
                        .condition.icon
                    }
                    day={moment(
                      searchedLocationDetails.forecast.forecastday[0].date
                    ).format("ddd")}
                  />
                  <WeatherSummary
                    temp={Math.round(
                      searchedLocationDetails.forecast.forecastday[1].day
                        .avgtemp_c
                    )}
                    img={
                      searchedLocationDetails.forecast.forecastday[1].day
                        .condition.icon
                    }
                    day={moment(
                      searchedLocationDetails.forecast.forecastday[1].date
                    ).format("ddd")}
                  />
                  <WeatherSummary
                    temp={Math.round(
                      searchedLocationDetails.forecast.forecastday[2].day
                        .avgtemp_c
                    )}
                    img={
                      searchedLocationDetails.forecast.forecastday[2].day
                        .condition.icon
                    }
                    day={moment(
                      searchedLocationDetails.forecast.forecastday[2].date
                    ).format("ddd")}
                  />
                </div>
                <button className="forward-arrow">
                  <img src={next} alt="forward-arrow" />
                </button>
              </div>
            </div>
            <div className="right">
              <div className="right-row-1">
                <form onSubmit={onSubmit}>
                  <input
                    aria-label="location"
                    type="text"
                    value={searchedLocation}
                    placeholder={searchedLocationDetails.location.name}
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="submit">
                    <img src={search} alt="search-button" />
                  </button>
                </form>
                {/* {isError && <p>No such city</p>} */}
              </div>
              <div className="right-row-2">
                <SunDetails
                  title="Sunrise"
                  time1={moment(
                    `${searchedLocationDetails.forecast.forecastday[0].date} ${searchedLocationDetails.forecast.forecastday[0].astro.sunrise}`
                  ).format("h:mm")}
                  time2={moment(
                    `${searchedLocationDetails.forecast.forecastday[0].date} ${searchedLocationDetails.forecast.forecastday[0].astro.sunrise}`
                  ).format("h:mm")}
                  styleExist={true}
                />
                <SunDetails
                  title="Golden Hour"
                  time1={moment(
                    `${searchedLocationDetails.forecast.forecastday[0].date} ${searchedLocationDetails.forecast.forecastday[0].astro.sunrise}`
                  ).format("h:mm")}
                  time2={moment(
                    `${searchedLocationDetails.forecast.forecastday[0].date} ${searchedLocationDetails.forecast.forecastday[0].astro.sunset}`
                  ).format("h:mm")}
                  styleExist={false}
                />
                <SunDetails
                  title="Sunset"
                  time1={moment(
                    `${searchedLocationDetails.forecast.forecastday[0].date} ${searchedLocationDetails.forecast.forecastday[0].astro.sunset}`
                  ).format("h:mm")}
                  time2={moment(
                    `${searchedLocationDetails.forecast.forecastday[0].date} ${searchedLocationDetails.forecast.forecastday[0].astro.sunset}`
                  ).format("h:mm")}
                  styleExist={true}
                />
              </div>
              <hr></hr>
              <div className="right-row-3">
                <AQI_UV
                  title={"Air Quality"}
                  quantity={2}
                  rate={"Moderate"}
                  dotPosition={"ball-aqi"}
                />
                <AQI_UV
                  title={"UV Index"}
                  quantity={"6 / 10"}
                  rate={"High"}
                  dotPosition={"ball-uv"}
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>loading.....</p>
      )}
    </>
  );
}

export default Homepage;

import React from "react";
import { WeatherDetail, WeatherSummary, SunDetails, AQI_UV } from "components";
import { Images } from "constant/images";
import "./style.scss";

function Homepage() {
  const { moon, topCloud, direction, water, rainy, next, search } = Images;
  return (
    <div className="container">
      <section className="card">
        <div className="left">
          <div className="left-row-1">
            <div className="moon-cloud">
              <img src={moon} alt="moon" className="moon" />
              <img src={topCloud} alt="cloud" className="top-cloud" />
            </div>
            <div className="temp-converter">
              <button className="fahrenheit">
                <span>F</span>
              </button>
              <button className="celcius">C</button>
            </div>
          </div>
          <div className="left-row-2">
            <p className="temp">
              27<span>&#8451;</span>
            </p>
            <p className="date">17th jun' 21</p>
            <div className="date-time">
              <p>Thursday</p>
              <p>|</p>
              <p>2:45 am</p>
            </div>
          </div>
          <div className="left-row-3">
            <WeatherDetail
              image={direction}
              imageDetail={"Wind"}
              title={"Wind"}
              info={"10km/h"}
            />
            <p className="separator">|</p>
            <WeatherDetail
              image={water}
              imageDetail={"Hum"}
              title={"Hum"}
              info={"54%"}
            />
            <p className="separator">|</p>
            <WeatherDetail
              image={rainy}
              imageDetail={"Rain"}
              title={"Rain"}
              info={"0.2%"}
            />
          </div>
          <div className="left-row-4">
            <WeatherSummary temp={24} day={"Tue"} />
            <WeatherSummary temp={24} day={"Wed"} />
            <WeatherSummary temp={24} day={"Thur"} />
            <WeatherSummary temp={24} day={"Fri"} />
          </div>
          <button className="forward-arrow">
            <img src={next} alt="forward-arrow" />
          </button>
        </div>
        <div className="right">
          <div className="right-row-1">
            <form>
              <input type="text" />
              <button type="submit">
                <img src={search} alt="search-button" />
              </button>
            </form>
          </div>
          <div className="right-row-2">
            <SunDetails
              title="Sunrise"
              time1="11:32"
              time2="11:46"
              styleExist={true}
            />
            <SunDetails
              title="Golden Hour"
              time1="6:00"
              time2="6:49"
              styleExist={false}
            />
            <SunDetails
              title="Sunset"
              time1="7:21"
              time2="7:25"
              styleExist={true}
            />
          </div>
          <hr></hr>
          <div className="right-row-3">
            <AQI_UV
              title={"Air Quality"}
              quantity={"2 / 5"}
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
  );
}

export default Homepage;

import React from "react";
import { Images } from "../../constants/images";
import "./style.scss";

function Homepage() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-style left">
          <div className="left-row-1">
            <img src={Images.moon} alt="moon" className="moon" />
            <div>
              <button className="fahrenheit">F</button>
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
            <div className="weather-detail">
              <img src={Images.direction} alt="Wind" />
              <p>Wind</p>
              <p>10km/h</p>
            </div>
            <p className="separator">|</p>
            <div className="weather-detail">
              <img src={Images.water} alt="Hum" />
              <p>Hum</p>
              <p>54%</p>
            </div>
            <p className="separator">|</p>
            <div className="weather-detail">
              <img src={Images.rainy} alt="rain" />
              <p>Rain</p>
              <p>0.2%</p>
            </div>
          </div>
          <div className="left-row-4">
            <div className="rectangle">
              <div className="rectangle-info">
                <p>
                  24<span>&#8451;</span>
                </p>
                <img src={Images.cloud} alt="weather" />
                <p>Tue</p>
              </div>
            </div>
            <div className="rectangle">
              <div className="rectangle-info">
                <p>
                  24<span>&#8451;</span>
                </p>
                <img src={Images.cloud} alt="weather" />
                <p>Wed</p>
              </div>
            </div>
            <div className="rectangle">
              <div className="rectangle-info">
                <p>
                  24<span>&#8451;</span>
                </p>
                <img src={Images.cloud} alt="weather" />
                <p>Thur</p>
              </div>
            </div>
            <div className="rectangle">
              <div className="rectangle-info">
                <p>
                  24<span>&#8451;</span>
                </p>
                <img src={Images.cloud} alt="weather" />
                <p>Fri</p>
              </div>
            </div>
          </div>
          <button className="forward-arrow">
            <img src={Images.next} alt="forward-arrow" />
          </button>
        </div>
        <div className="card-style right">
          <div className="right-row-1">
            {/* <button type="submit" className="location-pin">
              <img src={Images.location} alt="location-pin" />
            </button> */}
            <form>
              <input type="text" />
              <button type="submit">
                <img src={Images.search} alt="search-button" />
              </button>
            </form>
          </div>
          <div className="right-row-2">
            <div className="sun-details">
              <p className="title">Sunrise</p>
              <div className="clock">
                <div className="clock-img">
                  <img src={Images.clock} alt="clock" />
                </div>
                <p className="t-1">11:24</p>
                <p className="t-2">11:45</p>
              </div>
            </div>
            <div className="sun-details">
              <p className="title">Sunset</p>
              <div className="clock">
                <div className="clock-img">
                  <img src={Images.clock} alt="clock" />
                </div>
                <p className="t-1">07:21</p>
                <p className="t-2">07:25</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="right-row-3">
            <div>
              <p>Air Quality</p>
              <div className="half-arc">
                <span className="label">
                  2/5<br></br>Moderate
                </span>
              </div>
            </div>
            <div>
              <p>UV Index</p>
              <div className="half-arc">
                <span className="label">
                  6/10<br></br>high
                </span>
              </div>
            </div>
            <p className="sec-1">|</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

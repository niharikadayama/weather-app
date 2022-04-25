import React from "react";
import "./style.scss";

function Homepage() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-left">
          <div className="left-row-1"></div>
          <div className="left-row-2">
            <p className="temp">27C</p>
            <p className="date">17th jun' 21</p>
            <div className="date-time">
              <p>Thursday</p>
              <p>|</p>
              <p>2:45 am</p>
            </div>
          </div>
          <div className="left-row-3">
            <div className="weather-detail">
              <img src="" alt="Wind" />
              <p>Wind</p>
              <p>10km/h</p>
            </div>
            <div className="weather-detail">
              <img src="" alt="Hum" />
              <p>Hum</p>
              <p>54%</p>
            </div>
            <div className="weather-detail">
              <img src="" alt="rain" />
              <p>Rain</p>
              <p>0.2%</p>
            </div>
          </div>
          <div className="left-row-4"></div>
        </div>
        <div className="card-right">
          <div className="right-row-1">
            <button type="submit">loc</button>
            <form>
              <input type="text" />
              <button type="submit"></button>
            </form>
          </div>
          <div className="right-row-2">
            <div>
              <p>Sunrise</p>
              <div></div>
            </div>
            <div>
              <p>Sunset</p>
              <div></div>
            </div>
          </div>
          <div className="right-row-3">
            <div>
              <p>Air Quality</p>
              <div></div>
            </div>
            <div>
              <p>Air Quality</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

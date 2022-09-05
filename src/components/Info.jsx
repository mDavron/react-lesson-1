import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <section className="info">
        <div className="info-box">
          <ul>
            <li className="info-title">Location</li>
            <li>101 Cuba St,</li>
            <li>Te Aro, Wellington</li>
          </ul>
        </div>
        <div className="info-box">
          <ul>
            <li className="info-title">Hours</li>
            <li>7AM - 3PM</li>
            <li style={{ marginBottom: "20px" }}>Te Aro, Wellington</li>
            <li>7AM - 3PM</li>
            <li>8AM - 3PM</li>
          </ul>
        </div>

        <div className="info-box">
          <ul>
            <li style={{ marginBottom: "20px" }} className="info-title">
              Mondays?
            </li>
            <li>We are closed on Mondays to reflect and refuel</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Info;

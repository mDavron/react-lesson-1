import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <section className="about-us">
        <div className="content">
          <h2 style={{ marginBottom: "20px" }}>About us</h2>
          <p>
            Tucked away in the corner of Wellington, <i>Latte Cafe</i> is a
            local neighbourhood cafe and bar. Latte is all about doing what we
            love, in a city that we love. We keep stocked with local produce and
            pastries. Bring your family for a bite, or meet your friends for a
            coffee or warm drink.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutUs;

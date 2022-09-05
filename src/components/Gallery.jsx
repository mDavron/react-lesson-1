import React, { Component } from "react";
import food from "../assets/images/food.png";
import interior from "../assets/images/interior.png";
import beverages from "../assets/images/beverages.png";

import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="image image-1">
          <img src={beverages} alt="beverages.png" />
        </div>
        <div className="image image-2">
          <img src={interior} alt="interior.png" />
        </div>
        <div className="image image-3">
          <img src={food} alt="food.png" />
        </div>
      </section>
    );
  }
}

export default Gallery;

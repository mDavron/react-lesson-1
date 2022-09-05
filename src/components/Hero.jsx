import { Component } from "react";
import "./Hero.css";
import hero from "../assets/images/hero.png";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="container">
          <img src={hero} alt="" />
        </div>
      </div>
    );
  }
}

export default Hero;

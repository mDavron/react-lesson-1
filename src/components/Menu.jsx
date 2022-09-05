import React, { Component } from "react";
import foodMenu from "../assets/images/food-menu.png";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <section className="menu">
        <div className="menu-content">
          <h4 className="menu-title">Menu</h4>
          <p className="menu-text">
            We change our menu every season. Here is what we are currently
            dishing up.
          </p>
          <div className="menu-buttons">
            <button>Food Menu</button>
            <button>Drinks Menu</button>
            <button>Takeaway Menu</button>
          </div>
        </div>
        <div className="menu-info-img">
          <img src={foodMenu} alt="" />
        </div>
      </section>
    );
  }
}

export default Menu;

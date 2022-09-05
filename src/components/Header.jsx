import React, { Component } from "react";
import "./Header.css";
import logo from "../assets/svg/logo.svg";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import gmail from "../assets/svg/gmail.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav container">
          <ul className="links flex-center flex-gap">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Booking</a>
            </li>
          </ul>
          <a className="flex-center" href="#">
            <img src={logo} alt="logo.svg" />
          </a>
          <ul className="icons flex-center flex-gap">
            <li>
              <img src={facebook} alt="facebook.svg" />
            </li>
            <li>
              <img src={instagram} alt="instagram.svg" />
            </li>
            <li>
              <img src={gmail} alt="gmail.svg" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

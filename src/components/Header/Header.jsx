import React from "react";
import "./header.css";
import Logo from "..//..//assets/images/logoWorld.jpg";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="header__menu">
           
                <ul className="hdr__menu">
                  <li>
                    <Link to="/countries">Countries</Link>
                  </li>
                  <li>
                    <Link to="#about">About</Link>
                  </li>
                  <li>
                    <Link to="#services">Services</Link>
                  </li>
                  <li>
                    <Link to="#contact">Contact</Link>
                  </li>
                </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

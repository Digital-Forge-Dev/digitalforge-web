import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="box">
      <div className="header-wrapper">
        <header className="header">
          <div className="logo-wrapper">
            <div className="logo-container">
              <div className="logo">
                <div className="rectangle" />
                <div className="div" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="rectangle-6" />
              </div>
              <div className="DIGITAL-FORGE">
                <span className="text-wrapper">
                  DIGITAL
                  <br />
                </span>
                <span className="span">FORGE</span>
              </div>
            </div>
          </div>
          <div className="link">
            <Link className="nav-services">SERVICES</Link>
            <Link to='/portfolio' className="portfolios">PORTFOLIOS</Link>
            <Link to='/about' className="about-us">ABOUT US</Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar

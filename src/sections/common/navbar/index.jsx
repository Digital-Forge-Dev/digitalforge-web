import React from "react";
import "./style.css";

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
            <div className="nav-services">SERVICES</div>
            <div className="portfolios">PORTFOLIOS</div>
            <div className="about-us">ABOUT US</div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar

import React from "react";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="box">
      <div className="header-wrapper">
        <header className="header">
          <div className="frame">
            <div className="group-wrapper">
              <div className="group">
                <div className="div">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                  <div className="rectangle-7" />
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
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">SERVICES</div>
            <div className="portfolios">PORTFOLIOS</div>
            <div className="about-us">ABOUT US</div>
          </div>
        </header>
      </div>
    </div>
  );
};

import React from "react";
import "./style.css";
import arrow from "../../assets/icons/Arrow Icon.svg"

const Hero = () => {
    return (
        <div className="box">
            <div className="hero-wrapper">
                <div className="hero">
                    <h1 className="ONE-STOP-IT">
                        <span className="text-wrapper">
                            ONE STOP
                            <br />
                        </span>
                        <span className="span">IT</span>
                        <span className="text-wrapper"> SOLUTIONS</span>
                    </h1>
                    <div className="frame">
                        <p className="we-make-your">
                            <span className="text-wrapper-2">we make your groundbreaking </span>
                            <span className="text-wrapper-3">IDEAS</span>
                            <span className="text-wrapper-2"> come true.</span>
                        </p>
                        <div className="CTA-button">
                            <div className="text-wrapper-4">WORK WITH US</div>
                            <img className="arrow-icon" alt="Arrow icon" src={arrow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero

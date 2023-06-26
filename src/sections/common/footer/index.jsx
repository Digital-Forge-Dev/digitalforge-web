import React from "react";
import "./style.css";

export const Footer = () => {
  return (
    <div className="box">
      <div className="footer-section-wrapper">
        <div className="footer-section">
          <div className="frame">
            <div className="div">
              <div className="group">
                <div className="group-2">
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
              <img className="social-media" alt="Social media" src="social-media.png" />
            </div>
            <div className="frame-2">
              <div className="explore">
                <h1 className="h-1">Explore</h1>
                <div className="text-wrapper-2">About Us</div>
                <div className="text-wrapper-3">Services</div>
                <div className="text-wrapper-4">Pricing</div>
                <div className="text-wrapper-5">Blog</div>
                <div className="text-wrapper-6">Contact</div>
              </div>
              <div className="contact">
                <div className="text-wrapper-7">Contact</div>
                <div className="text-wrapper-8">Email</div>
                <div className="text-wrapper-9">Phone</div>
                <div className="text-wrapper-10">Address</div>
                <div className="text-wrapper-11">Social Media</div>
              </div>
              <div className="newsletter">
                <div className="text-wrapper-12">Newsletter</div>
                <p className="subscribe-to-our">
                  Subscribe to our newsletter to stay informed about our latest products, services, and promotions.
                  <br />
                  Feel free to unsubscribe anytime!
                </p>
                <div className="frame-wrapper">
                  <div className="frame-3">
                    <p className="p">Enter Your Email Address ...</p>
                    <img className="arrow-icon" alt="Arrow icon" src="arrow-icon.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="line" />
            <div className="frame-5">
              <p className="text-wrapper-13">Copyright © 2023 for Digital Forge Indonesia. All rights reserved.</p>
              <p className="terms-condition">Terms &amp; Condition&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

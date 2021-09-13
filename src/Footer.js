import React from "react";
import "./Footer.css";
import logo from "./motion.png";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="logo-sec">
        <img src={logo} />
      </div>
      <div className="product-sec">
        <h4>Product</h4>
        <p>Features</p>
        <p>Video</p>
        <p>Open source</p>
        <p>Github</p>
      </div>
      <div className="motion-sec">
        <h4>Motion for</h4>
        <p>Personal use</p>
        <p>Small business</p>
        <p>Enterprise</p>
        <p>Startups</p>
      </div>
      <div className="about-sec">
        <h4>Motion</h4>
        <p>About us</p>
        <p>Contact team</p>
      </div>
    </div>
  );
}

import React from "react";
import logo from "./main-img.png";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="left-col">
        <h2>Motion helps teams move work forward</h2>
        <p className="sub-text">
          All in one <span className="blue-line">easy-to-use</span> workspace to
          manage projects, tasks, chat, track team productivity and{" "}
          <span className="blue-line">get things done</span>.
        </p>
        <p className="signup-text">
          Sign up and try all our features for free!
        </p>
        <form>
          <input type="email" placeholder="Your work email" />
          <button>Get Started FREE</button>
        </form>
      </div>

      <div className="right-col">
        <img src={logo} alt="" />
      </div>

      <div />
    </div>
  );
}

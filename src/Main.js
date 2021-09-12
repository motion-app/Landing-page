import React from "react";
import logo from "./main-img.png";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="left-col">
        <h2>Motion helps teams move work forward</h2>
        <p className="sub-text">
          All in one easy-to-use workspace to manage projects, tasks, chat,
          track team productivity and get things done.
        </p>
        <p className="signup-text">
          Sign up and try all our features for free!
        </p>
        <form>
          <input type="email" placeholder="Your work email" />
          <button>Get Started</button>
        </form>
      </div>

      <div className="right-col">
        <img src={logo} alt="" />
      </div>

      <div />
    </div>
  );
}

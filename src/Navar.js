import React from "react";
import logo from './motion-short.png'
// import css
import './Navbar.css'

export default function Navar() {
  return (
    <>

    <nav className="navbar display-flex">
        
        <div className="logo-header">
            <img src={logo} alt="" className="logo" />
            <div className="logo-name"> Motion </div>
        </div>

        <ul className="nav-list">
            <li className="li-contact">Features</li>
            <li className="li-contact">Video</li>
            <li className="li-contact">About</li>
            <li className="li-contact">Login</li>
            <button className="try-button">Get-Started</button>
        </ul>
  </nav>

  </>
  )
}

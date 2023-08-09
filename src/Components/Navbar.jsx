import React from "react"
import logo from "../assets/react.svg"

export default function Navbar() {
    return (
        <div className="navbar-container">
              <div className="left">
                <img src={logo} alt="react logo" />
                <h2 className="nav-title">ReactFacts</h2>
              </div>
              <div className="right">
                <h4>React Course - Project 1</h4>
              </div>
        </div>
    )
}
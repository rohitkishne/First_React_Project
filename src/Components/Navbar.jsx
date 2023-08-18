import React from "react"
import logo from "../assets/react.svg"

export default function Navbar(props) {

    return (
        <div className={props.darkMode ? "navbar-container-dark": "navbar-container-light"}>
              <div className="left">
                <img src={logo} alt="react logo" />
                <h2 className="nav-title">ReactFacts</h2>
              </div>
              <div className="right">
                <span className="light-dark-mode">Light</span>
                <button className= {props.darkMode ? "darkBtn" : "lightBtn"}onClick = {props.toggleDarkMode}>
                  {props.darkMode ? 
                    <span class="material-symbols-outlined">
                      toggle_on
                    </span> : 
                    <span class="material-symbols-outlined">
                      toggle_off
                    </span>}
                </button>
                <span className="light-dark-mode">Dark</span>
              </div>
        </div>
    )
}
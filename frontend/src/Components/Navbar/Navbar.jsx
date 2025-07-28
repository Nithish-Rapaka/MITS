import React from "react";
import './NavBar.css';
import logo from '../../assets/logo.jpg';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item">
            <Link className="nav-link" to="/project">Our Projects</Link></li>
          <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link></li>
        </ul>
      </div>

      <div className="btn-group">
        <Link to="/login">
          <div
            aria-label="User Login Button"
            tabindex="0"
            role="button"
            class="user-profile"
          >
            <div className="user-profile-inner">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <path
                    d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"
                  ></path>
                </g>
              </svg>
              <p>Sign in</p>
            </div>
          </div>
        </Link>
        <Link to="/register">
        <div
          aria-label="User Login Button"
          tabindex="0"
          role="button"
          class="user-profile"
        >
          <div className="user-profile-inner">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g data-name="Layer 2" id="Layer_2">
                <path
                  d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"
                ></path>
              </g>
            </svg>
            <p>Sign Up</p>
          </div>
        </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

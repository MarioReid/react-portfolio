import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <div class="myname">
            <Link to="/">
              <a class="navbar-brand">
                Mario Reid
              </a>
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div class="navlinks">
                <Link to="/">
                  <a class="nav-link">
                    About
                  </a>
                </Link>
                <Link to="/portfolio">
                  <a class="nav-link">
                    Portfolio
                  </a>
                </Link>
                <Link to="/contact">
                  <a class="nav-link" aria-current="page">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

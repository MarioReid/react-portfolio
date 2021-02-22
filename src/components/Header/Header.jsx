import React, { Component } from "react";
import Navbar from "../Navbar/Navbar"

import {
  Link
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default Header;

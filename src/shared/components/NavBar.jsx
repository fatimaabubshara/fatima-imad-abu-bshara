import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style.scss";
class NavBar extends Component {
  render() {
    return (
      <div className="mainnav">
        <ul>
          <a href="#news ">
            <Link to="/Mainpage">Mainpage</Link>
          </a>
          <a href="#news">
            <Link to="/Log">Admin_Page</Link>
          </a>
        </ul>
      </div>
    );
  }
}
export default NavBar;

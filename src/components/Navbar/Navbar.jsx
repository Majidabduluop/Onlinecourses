import React from "react";
import "./Navbar.scss";
import logo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tours" />
      <ul className="nav-links">
        <li>
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" width={150} />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Add more links here */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

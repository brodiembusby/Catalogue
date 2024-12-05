import React from "react";
import { Link } from 'react-router-dom';
import "./../componentsCSS/Header.css"
// TODO: If user is signed in then change login to their first name

const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li className="login"><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

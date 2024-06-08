import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="login"><Link to="/login">Login</Link></li>
        <li><Link to="/User">User</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

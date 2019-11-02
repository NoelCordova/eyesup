import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
  <nav className="Navbar">
    <ul className="Navbar-list">
      <li>
        <Link to="/" className="Navbar-element">Home</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

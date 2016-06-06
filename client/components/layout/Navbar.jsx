import React from 'react';
import { IndexLink } from 'react-router';
import logo from 'assets/icons/izettle-logo.svg';

const Navbar = () => (
  <nav className="navbar">
    <IndexLink to="/" className="logo">
      <img src={logo} role="presentation" />
    </IndexLink>
    <ul>
      <li className="nav-item">
        <IndexLink activeClassName="active" to="/">Product library</IndexLink>
      </li>
      <li className="nav-item documentation">
        <a href={`${API_ENDPOINT}/documentation`}>Api documentation</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;

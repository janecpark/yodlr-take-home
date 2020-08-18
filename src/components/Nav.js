import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation to
 *  - Admin
 *  - Register Form
 */

const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light nav-custom">
      <NavLink className="navbar-brand nav-title" to="/">
        Yodlr
      </NavLink>
      <ul className="navbar-nav nav-custom ml-auto ">
        <li className="nav-item mr-4">
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink to="/signup">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

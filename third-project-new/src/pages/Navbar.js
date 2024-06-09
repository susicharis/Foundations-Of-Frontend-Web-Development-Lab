import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

// First Requirement --------------------------------------- //

const Navbar = () => {
  return (
    <nav>
      {/* Links to other pages */}
      <ul>
        <li>
            <Link to ="/home">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/portfolio">STAFF</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
      </ul>

      <hr className='NavHR' />
    </nav>

    
  );
};

export default Navbar;

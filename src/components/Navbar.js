import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Optional: Import your CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/category/general">General</Link>
        </li>
        <li>
          <Link to="/category/business">Business</Link>
        </li>
        <li>
          <Link to="/category/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/category/health">Health</Link>
        </li>
        <li>
          <Link to="/category/science">Science</Link>
        </li>
        <li>
          <Link to="/category/sports">Sports</Link>
        </li>
        <li>
          <Link to="/category/technology">Technology</Link>
        </li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

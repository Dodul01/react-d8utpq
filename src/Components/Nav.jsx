import React from 'react';
import '../Style/Nav.css';

const Nav = () =>{
  return(
    <nav>
      <div className="logo-container">
        <h1 className="logo">SurfBee</h1>
      </div>
      <div className="link-container">
        <ul className="link-box">
          <li className="link">Contribution</li>
          <li className="link">Surfing</li>
          <li className="link">Social Job</li>
          <li className="link">Top Up</li>
          <li className="link">Pay Out</li>
          <li className="link">Settings</li>
          <li className="link">Log Out</li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;
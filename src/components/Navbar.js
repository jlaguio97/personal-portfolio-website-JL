import React from "react";

import { Link } from "react-scroll";

const Navbar = () => (
  <div className="navBarHeader">
    <h3 className="navBarText" style={{paddingLeft:'2rem'}}>Jordan Laguio</h3>
    <hr />
    <div className="nav">
      <Link to="work" smooth={true} duration={1000} offset={100} className='hover-underline-animation'>
        <h3 className="navBarText">Work</h3>
      </Link>
    </div>
    <hr />

    <Link to="about" smooth={true} duration={1000} offset={-10} className='hover-underline-animation'>
      <h3 className="navBarText" style={{paddingRight:'2rem'}}>About</h3>
    </Link>



  </div>
);

export default Navbar;

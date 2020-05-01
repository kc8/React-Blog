import React from 'react';
import {Link} from 'react-router-dom';



//Add a NaveBar with /about and home for posts. 
function Header() {
    return (
      <div>
      <header id="header">
      <h1><Link to='/'>Kyle's Blog</Link></h1>
      <nav className="links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a href='https://cooperkyle.com'>Portfolio</a></li>
        </ul>
      </nav>
      <nav className="main">
        <ul>
          <li className="menu">
            <a className="fa-bars" href="#menu">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
      ) 
  }

  export default Header;
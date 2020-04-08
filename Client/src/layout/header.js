import React from 'react';
import {Link} from 'react-router-dom';



//Add a NaveBar with /about and home for posts. 
function Header() {
    return (
      <div>
      <header id="header">
      <h1><a href="index.html">Kyle's Blog</a></h1>
      <nav class="links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <nav class="main">
        <ul>
          <li class="menu">
            <a class="fa-bars" href="#menu">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
      ) 
  }

  export default Header;
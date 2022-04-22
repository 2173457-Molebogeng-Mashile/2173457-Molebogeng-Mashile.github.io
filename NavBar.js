
import React,{useState} from 'react';
import  { NavLink, Link }  from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


import './Navbar.css'

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  library.add(fas)
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/design"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Design
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-window-close" : "fa-solid fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

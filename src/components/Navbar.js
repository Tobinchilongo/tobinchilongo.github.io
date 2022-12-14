import React, { useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import '../stylesheets/navbar.css';
import { links } from './data/NavbarData';
import { ReactComponent as GitHub } from '../images/icons/github.svg';
import { ReactComponent as LinkedIn } from '../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../images/icons/twitter.svg';
import { ReactComponent as AngelList } from '../images/icons/angellist.svg';
import { ReactComponent as Close } from '../images/icons/close.svg';
import { ReactComponent as Menu } from '../images/icons/menu.svg';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', handleNavbar);

  const handleMenu = () => setMenuStatus(!menuStatus);
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className={menuStatus ? 'mobile-side-nav' : 'mobile-side-nav-hidden'}>
          <ul>
            <li className="menu-close-icon-container">
              <Close onClick={handleMenu} className="social-icon menu-close-icon" />
            </li>
            <li>
              <ul className="nav-links">
                {
          links.map((link) => (
            <NavLink
              onClick={handleMenu}
              className="nav-single-link"
              key={link.id}
              to={link.to}
            >
              {link.title}
            </NavLink>
          ))
        }
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-social-icons-container">
          <li>
            <a href="https://www.linkedin.com/in/tobin-chilongo/">
              <LinkedIn className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Tobinchilongo">
              <GitHub className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Tobin_Official">
              <Twitter className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/tobin-l-chilongo-jr">
              <AngelList className="social-icon" />
            </a>
          </li>
        </ul>
        <Menu onClick={handleMenu} className="social-icon menu-open-icon" />
      </nav>
    </>
  );
};
export default Navbar;

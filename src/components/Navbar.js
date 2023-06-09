import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="image-logo" src='images/dep-logo.png' alt='DEP' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Album'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                New Album
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Tour'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tour Dates
              </Link>
            </li>

            <li>
              <Link
                to='/SignUp'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Link to="/SignUp">
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
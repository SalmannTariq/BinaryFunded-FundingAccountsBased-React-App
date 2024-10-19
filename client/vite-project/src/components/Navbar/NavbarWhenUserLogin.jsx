import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import './Navbar.css';
import Logo from '../../assets/Logo-01.png';
import { FaRegUserCircle } from "react-icons/fa";
const NavbarWhenUserLogin = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        setUser(null);
        navigate("/Login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/home');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='container'>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${isMenuOpen ? 'show' : ''}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" className='logo' />
          </a>
          {user && <p className='text-white mb-0 small user-email d-lg-none'>{user.displayName || user.email} <FaRegUserCircle /></p>}
          <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" onClick={toggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ul-bg ms-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" onClick={handleMenuItemClick}>Chart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuItemClick}>Markets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuItemClick}>News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuItemClick}>Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuItemClick}>More</a>
              </li>
              <li>
                <button className="logout-btn d-lg-none d-block" type="button" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
            <div className='nav-btns align-items-center'>
              <button className="logout-btn d-lg-block d-none" type="button" onClick={handleLogout}>Logout</button>
              {user && <p className='text-white mb-0 small user-email'>{user.displayName || user.email} <FaRegUserCircle /></p>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarWhenUserLogin;

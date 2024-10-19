import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Logo-01.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  const getStarted = () =>{
    navigate("/Login");
  }
  return (
    <div className='container'>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark  ${isMenuOpen ? 'show' : ''}`}>
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" className='logo' />
          </a>
          <button className="started-btn" type="submit" onClick={getStarted}>Get Started</button>
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
            </ul>
            <div className='nav-btns'>
              <Link to="/Login"><button className="login-btn" type="submit">Login</button></Link>
              <button className="btn" type="submit" onClick={getStarted}>Start Free Trial</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

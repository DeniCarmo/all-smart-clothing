import { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../assets/img/crown.svg';
import { UserContext } from '../contexts/UserContext';
import { signOutUser } from '../utils/firebase/firebase.utils';

const Header = () => {
  const location = useLocation();
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <header className="header container">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <img src={logo} alt="All Smart Clothing" />
            {location.pathname === '/' ? (
              <h1 className="header-title">All Smart Clothing</h1>
            ) : null}
          </Link>

          <nav className="header-nav">
            <ul className="header-menu">
              <li className="header-menu-item">
                <Link to="/" className="header-menu-item-link">
                  Home
                </Link>
              </li>

              <li className="header-menu-item">
                <Link to="shop" className="header-menu-item-link">
                  Shop
                </Link>
              </li>

              {currentUser ? (
                <li className="header-menu-item">
                  <span className="header-menu-item-link" onClick={signOutUser}>
                    Sign Out
                  </span>
                </li>
              ) : (
                <li className="header-menu-item">
                  <Link to="auth" className="header-menu-item-link">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Header;

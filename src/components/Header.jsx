import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../assets/img/crown.svg';

const Header = (props) => {
  const location = useLocation();
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
                <Link to="/">Home</Link>
              </li>

              <li className="header-menu-item">
                <Link to="shop">Shop</Link>
              </li>

              <li className="header-menu-item">
                <Link to="auth">Sign In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Header;

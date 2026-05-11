import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span>📞 +1 (555) 123-4567</span>
              <span>✉️ support@ecommerce.com</span>
            </div>
            <div className="user-actions">
              {user ? (
                <div className="user-menu">
                  <span>Welcome, {user.name}</span>
                  <button onClick={logout} className="btn-link">Logout</button>
                </div>
              ) : (
                <div className="auth-links">
                  <Link to="/login">Sign In</Link>
                  <span>|</span>
                  <Link to="/register">Join</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <div className="logo">
              <Link to="/">
                <h1>E-Commerce</h1>
              </Link>
            </div>

            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-btn">
                  🔍
                </button>
              </div>
            </form>

            <div className="header-actions">
              <Link to="/cart" className="cart-link">
                <span className="cart-icon">🛒</span>
                <span className="cart-text">Cart</span>
              </Link>
              {user && (
                <Link to="/account" className="account-link">
                  <span className="account-icon">👤</span>
                  <span className="account-text">Account</span>
                </Link>
              )}
            </div>

            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products?category=Electronics">Electronics</Link></li>
            <li><Link to="/products?category=Clothing">Clothing</Link></li>
            <li><Link to="/products?category=Books">Books</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            {user?.role === 'admin' && <li><Link to="/admin">Admin Panel</Link></li>}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
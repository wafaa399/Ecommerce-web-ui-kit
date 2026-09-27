import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar / Header
 * Main site navigation — shown on all pages.
 * Logic Team: 
 *   - Connect `onCartClick` to open cart sidebar
 *   - Connect `onAccountClick` to user account/profile
 *   - Replace `cartItemCount` with actual cart item count from store
 *   - Connect search form to search functionality
 */
function Navbar({
  cartItemCount = 0,
  onCartClick = () => {},
  onAccountClick = () => {},
  onSearchSubmit = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories', hasDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner container--wide">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Ecommerce - Go to homepage">
          <span className="navbar__logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="6" fill="#1a1a1a"/>
              <path d="M7 8h14M7 14h10M7 20h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="navbar__logo-text">Ecommerce</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="navbar__nav-item">
                <Link
                  to={link.href}
                  className={`navbar__nav-link ${location.pathname === link.href ? 'navbar__nav-link--active' : ''}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <span className="navbar__nav-arrow" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="navbar__actions">
          {/* Search */}
          <form className="navbar__search" onSubmit={handleSearchSubmit} role="search">
            <label htmlFor="navbar-search" className="sr-only">Search products</label>
            <div className="navbar__search-wrapper">
              <span className="navbar__search-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667zM14 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input
                id="navbar-search"
                type="search"
                placeholder="Search products"
                className="navbar__search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Cart */}
          <button
            className="navbar__action-btn"
            onClick={onCartClick}
            aria-label={`Shopping cart${cartItemCount > 0 ? `, ${cartItemCount} items` : ''}`}
            id="navbar-cart-btn"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 1h2.5l1.6 8M5.1 9h11.4l-1.5 6H6.6M7.5 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM15.5 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {cartItemCount > 0 && (
              <span className="navbar__cart-badge">{cartItemCount}</span>
            )}
          </button>

          {/* Account */}
          <button
            className="navbar__action-btn"
            onClick={onAccountClick}
            aria-label="My account"
            id="navbar-account-btn"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.667 17.5v-1.667A3.333 3.333 0 0 0 13.333 12.5H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="navbar-mobile-toggle"
            type="button"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10h15M2.5 5h15M2.5 15h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu" role="navigation" aria-label="Mobile navigation">
          <nav>
            <ul className="navbar__mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="navbar__mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="navbar__mobile-search" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                placeholder="Search products"
                className="navbar__mobile-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;

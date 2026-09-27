import './Footer.css';

/**
 * Footer
 * Site footer with links and payment methods — shown on all pages.
 * Logic Team: Replace static links with dynamic CMS data if needed.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container--wide">
        <div className="footer__main">
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="6" fill="#1a1a1a"/>
                  <path d="M7 8h14M7 14h10M7 20h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="footer__logo-text">Ecommerce</span>
            </div>
            <p className="footer__brand-desc">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="footer__social">
              {/* GitHub */}
              <a href="#" className="footer__social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Support Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">SUPPORT</h3>
            <ul className="footer__col-list">
              <li><a href="#" className="footer__col-link">FAQ</a></li>
              <li><a href="#" className="footer__col-link">Terms of use</a></li>
              <li><a href="#" className="footer__col-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">COMPANY</h3>
            <ul className="footer__col-list">
              <li><a href="#" className="footer__col-link">About us</a></li>
              <li><a href="#" className="footer__col-link">Contact</a></li>
              <li><a href="#" className="footer__col-link">Careers</a></li>
            </ul>
          </div>

          {/* Shop Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">SHOP</h3>
            <ul className="footer__col-list">
              <li><a href="#" className="footer__col-link">My Account</a></li>
              <li><a href="#" className="footer__col-link">Checkout</a></li>
              <li><a href="#" className="footer__col-link">Cart</a></li>
            </ul>
          </div>

          {/* Accepted Payments Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">ACCEPTED PAYMENTS</h3>
            <div className="footer__payments">
              {/* Mastercard */}
              <div className="footer__payment-icon" aria-label="Mastercard">
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
                  <rect width="38" height="24" rx="4" fill="#F3F4F6"/>
                  <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* American Express */}
              <div className="footer__payment-icon" aria-label="American Express">
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
                  <rect width="38" height="24" rx="4" fill="#2557D6"/>
                  <text x="5" y="16" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">AMEX</text>
                </svg>
              </div>
              {/* Visa */}
              <div className="footer__payment-icon" aria-label="Visa">
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
                  <rect width="38" height="24" rx="4" fill="#F3F4F6"/>
                  <text x="5" y="16" fill="#1A1F71" fontSize="10" fontWeight="bold" fontFamily="Arial" fontStyle="italic">VISA</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} DevCut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

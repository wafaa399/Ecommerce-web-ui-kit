import './NotificationBar.css';

/**
 * NotificationBar
 * Top promotional announcement bar — shown on all pages.
 * Logic Team: Replace `message` and `linkText` props with dynamic data from API.
 */
function NotificationBar({
  message = 'Get 25% OFF on your first order.',
  linkText = 'Order Now',
  onLinkClick = () => {},
}) {
  return (
    <div className="notification-bar" role="banner" aria-label="Promotional announcement">
      <div className="notification-bar__inner">
        <p className="notification-bar__text">
          {message}{' '}
          <button
            className="notification-bar__link"
            onClick={onLinkClick}
            type="button"
          >
            {linkText}
          </button>
        </p>
      </div>
    </div>
  );
}

export default NotificationBar;

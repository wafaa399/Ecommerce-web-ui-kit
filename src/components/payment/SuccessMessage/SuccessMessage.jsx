import './SuccessMessage.css';

/**
 * SuccessMessage
 * The green checkmark success header at the top of the After Payment page.
 * Logic Team: Pass `orderNumber` from your order API response.
 */
function SuccessMessage({ orderNumber = '' }) {
  return (
    <div className="success-message" role="status" aria-live="polite">
      {/* Success Icon */}
      <div className="success-message__icon-wrapper" aria-hidden="true">
        <div className="success-message__icon-bg">
          <svg
            className="success-message__checkmark"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M8 18L14 24L28 11"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="success-message__ring" aria-hidden="true" />
      </div>

      <div className="success-message__text">
        <h1 className="success-message__title">Payment Successful!</h1>
        <p className="success-message__subtitle">
          Your order has been confirmed and is being processed.
        </p>
        {orderNumber && (
          <p className="success-message__order-number">
            Order #{orderNumber}
          </p>
        )}
      </div>
    </div>
  );
}

export default SuccessMessage;

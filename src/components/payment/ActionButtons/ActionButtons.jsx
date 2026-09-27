import './ActionButtons.css';

/**
 * ActionButtons
 * Post-payment action buttons at the bottom of the After Payment page.
 * Logic Team:
 *   - Connect `onContinueShopping` to navigate to homepage/shop
 *   - Connect `onTrackOrder` to your order tracking page
 *   - Connect `onViewOrderHistory` to the user's account/orders page
 */
function ActionButtons({
  onContinueShopping = () => {},
  onTrackOrder = () => {},
  onViewOrderHistory = () => {},
}) {
  return (
    <div className="action-buttons">
      <button
        type="button"
        className="action-buttons__primary"
        onClick={onContinueShopping}
        id="payment-continue-shopping-btn"
      >
        Continue Shopping
      </button>
      <button
        type="button"
        className="action-buttons__secondary"
        onClick={onTrackOrder}
        id="payment-track-order-btn"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="8" cy="8" r="6.667"/>
          <path d="M8 5.333V8l1.778 1.778"/>
        </svg>
        Track Order
      </button>
      <button
        type="button"
        className="action-buttons__tertiary"
        onClick={onViewOrderHistory}
        id="payment-view-orders-btn"
      >
        View Order History
      </button>
    </div>
  );
}

export default ActionButtons;

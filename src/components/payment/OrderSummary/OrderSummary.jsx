import './OrderSummary.css';

/**
 * OrderSummary
 * Shows the list of items ordered and the price breakdown.
 * Logic Team: Pass `order` object from your order API response.
 */
function OrderSummary({ order }) {
  if (!order) return null;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <div className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>

      {/* Items */}
      <div className="order-summary__items">
        {order.items.map((item) => (
          <div key={item.id} className="order-summary__item">
            {/* Item Image */}
            <div className="order-summary__item-image">
              {item.image ? (
                <img src={item.image} alt={item.name} className="order-summary__item-img" />
              ) : (
                <div className="order-summary__item-img-placeholder" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
                    <rect width="80" height="80" rx="4" fill="#f3f4f6"/>
                    <path d="M20 55l15-20 10 13 7-9 8 16H20z" fill="#d1d5db"/>
                    <circle cx="55" cy="28" r="6" fill="#d1d5db"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Item Info */}
            <div className="order-summary__item-info">
              <p className="order-summary__item-name">{item.name}</p>
              <p className="order-summary__item-meta">
                {item.color && `Color: ${item.color}`}
                {item.color && item.size && ' · '}
                {item.size && `Size: ${item.size}`}
              </p>
              <p className="order-summary__item-qty">Qty: {item.quantity}</p>
            </div>

            {/* Item Price */}
            <div className="order-summary__item-price">
              {formatCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="order-summary__divider" aria-hidden="true" />

      {/* Price Breakdown */}
      <div className="order-summary__breakdown">
        <div className="order-summary__row">
          <span className="order-summary__row-label">Subtotal</span>
          <span className="order-summary__row-value">{formatCurrency(order.subtotal)}</span>
        </div>
        <div className="order-summary__row">
          <span className="order-summary__row-label">Shipping</span>
          <span className="order-summary__row-value">
            {order.shipping === 0 ? 'Free' : formatCurrency(order.shipping)}
          </span>
        </div>
        {order.tax > 0 && (
          <div className="order-summary__row">
            <span className="order-summary__row-label">Tax</span>
            <span className="order-summary__row-value">{formatCurrency(order.tax)}</span>
          </div>
        )}
        {order.discount > 0 && (
          <div className="order-summary__row order-summary__row--discount">
            <span className="order-summary__row-label">Discount</span>
            <span className="order-summary__row-value">-{formatCurrency(order.discount)}</span>
          </div>
        )}

        <div className="order-summary__divider" aria-hidden="true" />

        <div className="order-summary__row order-summary__row--total">
          <span className="order-summary__total-label">Total</span>
          <span className="order-summary__total-value">{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

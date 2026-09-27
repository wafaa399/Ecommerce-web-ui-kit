import './ProductRating.css';

/**
 * ProductRating
 * Star rating display component.
 * Logic Team: Pass `rating` (0-5) and `reviewCount` from product API.
 */
function ProductRating({ rating = 0, reviewCount = 0, showCount = true, size = 'md' }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`product-rating product-rating--${size}`} aria-label={`Rating: ${rating} out of 5 stars`}>
      <div className="product-rating__stars" aria-hidden="true">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <svg key={`full-${i}`} className="product-rating__star product-rating__star--full" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12.22L3.2 15l.93-5.43L.26 5.93l5.46-.8L8 .25l2.28 4.88 5.46.8-3.87 3.64L12.8 15z"/>
          </svg>
        ))}
        {/* Half star */}
        {hasHalfStar && (
          <svg className="product-rating__star product-rating__star--half" viewBox="0 0 16 16">
            <defs>
              <linearGradient id="half-star-grad">
                <stop offset="50%" stopColor="#F59E0B"/>
                <stop offset="50%" stopColor="#D1D5DB"/>
              </linearGradient>
            </defs>
            <path d="M8 12.22L3.2 15l.93-5.43L.26 5.93l5.46-.8L8 .25l2.28 4.88 5.46.8-3.87 3.64L12.8 15z" fill="url(#half-star-grad)"/>
          </svg>
        )}
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <svg key={`empty-${i}`} className="product-rating__star product-rating__star--empty" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12.22L3.2 15l.93-5.43L.26 5.93l5.46-.8L8 .25l2.28 4.88 5.46.8-3.87 3.64L12.8 15z"/>
          </svg>
        ))}
      </div>
      {showCount && (
        <span className="product-rating__count">
          {reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'}
        </span>
      )}
    </div>
  );
}

export default ProductRating;

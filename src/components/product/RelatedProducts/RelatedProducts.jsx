import ProductRating from '../ProductRating/ProductRating';
import './RelatedProducts.css';

/**
 * RelatedProducts
 * "You Might Also Like" section at the bottom of Product Details page.
 * Logic Team:
 *   - Pass `products` array from API (recommended/related products endpoint)
 *   - Connect `onProductClick` to navigate to that product's detail page
 *   - Connect `onAddToCart` with your cart logic
 */
function RelatedProducts({
  products = [],
  onProductClick = () => {},
  onAddToCart = () => {},
}) {
  if (!products || products.length === 0) return null;

  return (
    <section className="related-products" aria-label="Related products">
      <div className="related-products__header">
        <h2 className="related-products__title">You Might Also Like</h2>
      </div>
      <div className="related-products__grid">
        {products.map((product) => (
          <article key={product.id} className="related-product-card">
            <button
              className="related-product-card__image-btn"
              onClick={() => onProductClick(product)}
              aria-label={`View ${product.name}`}
              type="button"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.alt || product.name}
                  className="related-product-card__img"
                />
              ) : (
                <div className="related-product-card__img-placeholder" aria-hidden="true">
                  <svg width="50" height="50" viewBox="0 0 80 80" fill="none">
                    <rect width="80" height="80" rx="4" fill="#f3f4f6"/>
                    <path d="M20 55l15-20 10 13 7-9 8 16H20z" fill="#d1d5db"/>
                    <circle cx="55" cy="28" r="6" fill="#d1d5db"/>
                  </svg>
                </div>
              )}
            </button>

            <div className="related-product-card__info">
              <button
                className="related-product-card__name-btn"
                onClick={() => onProductClick(product)}
                type="button"
              >
                {product.name}
              </button>

              <ProductRating rating={product.rating} showCount={false} size="sm" />

              <div className="related-product-card__pricing">
                <span className="related-product-card__price">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="related-product-card__original-price">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;

import { useState } from 'react';
import ProductRating from '../ProductRating/ProductRating';
import './ProductInfo.css';

/**
 * ProductInfo
 * Right-side product information panel on the Product Details page.
 * Includes: title, brand, SKU, rating, price, description, color, size, quantity selectors, and action buttons.
 *
 * Logic Team:
 *   - Pass `product` object from your API response
 *   - Pass `selectedColorId` and `onColorChange` from parent (ProductDetailsPage) to keep gallery in sync
 *   - Connect `onAddToCart` with your cart store/API
 *   - Connect `onBuyNow` with your checkout flow
 *   - Connect `onWishlistToggle` with your wishlist store
 *   - `selectedSize` and `quantity` are managed locally here for UI purposes
 */
function ProductInfo({
  product,
  selectedColorId,
  onColorChange = () => {},
  onAddToCart = () => {},
  onBuyNow = () => {},
  onWishlistToggle = () => {},
}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > (product.quantityInStock || 99)) return product.quantityInStock || 99;
      return next;
    });
  };

  const handleAddToCart = () => {
    onAddToCart({ product, selectedColorId, selectedSize, quantity });
  };

  const handleBuyNow = () => {
    onBuyNow({ product, selectedColorId, selectedSize, quantity });
  };

  const handleWishlist = () => {
    setIsWishlisted((prev) => !prev);
    onWishlistToggle({ product, isWishlisted: !isWishlisted });
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.originalPrice)
    : null;

  const selectedColor = product.colors?.find((c) => c.id === selectedColorId);

  return (
    <div className="product-info">
      {/* Brand & Name */}
      <div className="product-info__header">
        {product.brand && (
          <p className="product-info__brand">{product.brand}</p>
        )}
        <h1 className="product-info__name">{product.name}</h1>
        {product.sku && (
          <p className="product-info__sku">SKU: {product.sku}</p>
        )}
      </div>

      {/* Rating */}
      <ProductRating rating={product.rating} reviewCount={product.reviewCount} />

      {/* Price */}
      <div className="product-info__price-block">
        <span className="product-info__price">{formattedPrice}</span>
        {formattedOriginalPrice && (
          <span className="product-info__original-price">{formattedOriginalPrice}</span>
        )}
        {product.discount && (
          <span className="product-info__discount-badge">{product.discount}% OFF</span>
        )}
      </div>

      {/* Description */}
      <div className="product-info__description">
        <p>{product.description}</p>
      </div>

      {/* Divider */}
      <div className="product-info__divider" aria-hidden="true" />

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div className="product-info__option-group">
          <label className="product-info__option-label">
            Colour:{' '}
            <span className="product-info__option-value">
              {selectedColor?.name || 'Select colour'}
            </span>
          </label>
          <div className="product-info__colors" role="group" aria-label="Select colour">
            {product.colors.map((color) => (
              <button
                key={color.id}
                className={`product-info__color-swatch ${selectedColorId === color.id ? 'product-info__color-swatch--active' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => onColorChange(color.id)}
                aria-label={`Select colour ${color.name}`}
                aria-pressed={selectedColorId === color.id}
                type="button"
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="product-info__option-group">
          <label className="product-info__option-label">Size:</label>
          <div className="product-info__sizes" role="group" aria-label="Select size">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                className={`product-info__size-btn ${selectedSize === size.id ? 'product-info__size-btn--active' : ''} ${!size.available ? 'product-info__size-btn--unavailable' : ''}`}
                onClick={() => size.available && setSelectedSize(size.id)}
                aria-label={`Size ${size.label}${!size.available ? ' - out of stock' : ''}`}
                aria-pressed={selectedSize === size.id}
                aria-disabled={!size.available}
                type="button"
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="product-info__option-group">
        <label className="product-info__option-label">Quantity:</label>
        <div className="product-info__quantity">
          <button
            className="product-info__qty-btn"
            onClick={() => handleQuantityChange(-1)}
            aria-label="Decrease quantity"
            type="button"
            disabled={quantity <= 1}
            id="product-qty-decrease"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="product-info__qty-value" aria-live="polite" aria-atomic="true">
            {quantity}
          </span>
          <button
            className="product-info__qty-btn"
            onClick={() => handleQuantityChange(1)}
            aria-label="Increase quantity"
            type="button"
            id="product-qty-increase"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="product-info__actions">
        <button
          className="product-info__add-to-cart-btn"
          onClick={handleAddToCart}
          type="button"
          id="product-add-to-cart-btn"
        >
          Add to Cart
        </button>
        <button
          className="product-info__buy-now-btn"
          onClick={handleBuyNow}
          type="button"
          id="product-buy-now-btn"
        >
          Buy Now
        </button>
        <button
          className={`product-info__wishlist-btn ${isWishlisted ? 'product-info__wishlist-btn--active' : ''}`}
          onClick={handleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          type="button"
          id="product-wishlist-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;

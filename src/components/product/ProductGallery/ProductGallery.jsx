import { useState, useEffect } from 'react';
import './ProductGallery.css';

/**
 * ProductGallery
 * Product image gallery with main image and thumbnail strip.
 *
 * Logic Team:
 *   - Pass `images` array with { id, src, alt, colorId } objects from product API.
 *   - Pass `activeColorId` (string) to sync gallery with the selected color swatch.
 *   - Handle image loading/error states.
 */
function ProductGallery({ images = [], productName = '', activeColorId = null }) {
  // Determine the index matching the selected color; fall back to 0
  const resolveIndex = (colorId) => {
    if (!colorId) return 0;
    const idx = images.findIndex((img) => img.colorId === colorId);
    return idx >= 0 ? idx : 0;
  };

  const [activeIndex, setActiveIndex] = useState(() => resolveIndex(activeColorId));

  // Sync gallery with external color selection
  useEffect(() => {
    setActiveIndex(resolveIndex(activeColorId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColorId]);

  const activeImage = images[activeIndex];

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div className="product-gallery__main">
        {activeImage?.src ? (
          <img
            src={activeImage.src}
            alt={activeImage.alt || productName}
            className="product-gallery__main-img"
          />
        ) : (
          <div className="product-gallery__placeholder" aria-label={`${productName} product image`}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="product-gallery__placeholder-icon">
              <rect width="80" height="80" rx="8" fill="#f3f4f6"/>
              <path d="M20 55l15-20 10 13 7-9 8 16H20z" fill="#d1d5db"/>
              <circle cx="55" cy="28" r="6" fill="#d1d5db"/>
            </svg>
            <p className="product-gallery__placeholder-text">Product Image</p>
          </div>
        )}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              className="product-gallery__arrow product-gallery__arrow--prev"
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              aria-label="Previous image"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="product-gallery__arrow product-gallery__arrow--next"
              onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              aria-label="Next image"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="product-gallery__thumbnails" role="tablist" aria-label="Product images">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`product-gallery__thumb ${index === activeIndex ? 'product-gallery__thumb--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
              type="button"
            >
              {image.src ? (
                <img src={image.src} alt={image.alt} className="product-gallery__thumb-img" />
              ) : (
                <div
                  className="product-gallery__thumb-placeholder"
                  style={{ backgroundColor: image.color || '#f3f4f6' }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;

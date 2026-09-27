import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import ProductGallery from '../../components/product/ProductGallery/ProductGallery';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';
import RelatedProducts from '../../components/product/RelatedProducts/RelatedProducts';
import { mockProduct, mockRelatedProducts } from '../../data/mockProduct';
import './ProductDetailsPage.css';

/**
 * ProductDetailsPage
 * UI-only product detail page — composes gallery, info, and related products.
 *
 * Logic Team:
 *   - Replace `mockProduct` with API data using route param `productId`
 *   - Wire cart, checkout, and wishlist callbacks
 *   - `selectedColorId` is lifted here so both Gallery and Info stay in sync
 */
function ProductDetailsPage() {
  const navigate = useNavigate();
  const product = mockProduct;

  // Lifted color state so Gallery and Info stay in sync
  const [selectedColorId, setSelectedColorId] = useState(
    product?.colors?.[2]?.id || null
  );

  return (
    <MainLayout>
      <Breadcrumb
        pageTitle={product.name}
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/categories' },
          { label: product.category, href: '/categories' },
          { label: product.name },
        ]}
      />
      <main className="page-main">
        <div className="container--wide product-details-page">
          <div className="product-details-page__grid">
            <ProductGallery
              images={product.images}
              productName={product.name}
              activeColorId={selectedColorId}
            />
            <ProductInfo
              product={product}
              selectedColorId={selectedColorId}
              onColorChange={setSelectedColorId}
            />
          </div>
          <RelatedProducts
            products={mockRelatedProducts}
            onProductClick={(relatedProduct) =>
              navigate(`/products/${relatedProduct.id}`)
            }
          />
        </div>
      </main>
    </MainLayout>
  );
}

export default ProductDetailsPage;

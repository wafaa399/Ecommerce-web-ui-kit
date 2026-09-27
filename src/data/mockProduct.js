/**
 * MOCK PRODUCT DATA
 * Logic Team: Replace this mock data with actual API response data.
 * This structure represents the expected product data shape.
 *
 * Image paths are relative to the /public directory and served by Vite at runtime.
 * Logic Team: Replace image `src` values with actual CDN/API image URLs.
 */
export const mockProduct = {
  id: 'prod-001',
  name: 'Raw Black T-Shirt Lineup',
  brand: 'Fashion Brand',
  sku: '101-345-656',
  rating: 4.0,
  reviewCount: 121,
  price: 75.00,
  originalPrice: 85.00,
  discount: null,
  description:
    'The raw black t-shirt lineup features a selection of premium quality black t-shirts. These shirts are made from high-quality cotton and are designed to be comfortable and stylish. The raw black t-shirt lineup is perfect for any occasion, whether you\'re going to the gym, running errands, or just hanging out with friends.',

  /**
   * Each color has a corresponding image (colorImage).
   * Logic Team: Replace `colorImage` with actual per-color product images from your API.
   * The `images` array below is the gallery; color selection updates the main displayed image.
   */
  colors: [
    {
      id: 'col-1',
      name: 'Yellow',
      value: '#F59E0B',
      colorImage: '/images/tshirt-yellow.svg',
    },
    {
      id: 'col-2',
      name: 'Brown',
      value: '#6B5740',
      colorImage: '/images/tshirt-brown.svg',
    },
    {
      id: 'col-3',
      name: 'Black',
      value: '#1a1a1a',
      colorImage: '/images/tshirt-black.svg',
    },
    {
      id: 'col-4',
      name: 'White',
      value: '#E5E7EB',
      colorImage: '/images/tshirt-white.svg',
    },
  ],

  /**
   * Gallery images shown in the thumbnail strip.
   * Logic Team: Replace with actual product gallery images from your API.
   */
  images: [
    {
      id: 'img-1',
      src: '/images/tshirt-black.svg',
      alt: 'Raw Black T-Shirt Lineup - Black colorway',
      color: '#1a1a1a',
      colorId: 'col-3',
    },
    {
      id: 'img-2',
      src: '/images/tshirt-brown.svg',
      alt: 'Raw Black T-Shirt Lineup - Brown colorway',
      color: '#6B5740',
      colorId: 'col-2',
    },
    {
      id: 'img-3',
      src: '/images/tshirt-white.svg',
      alt: 'Raw Black T-Shirt Lineup - White colorway',
      color: '#FFFFFF',
      colorId: 'col-4',
    },
    {
      id: 'img-4',
      src: '/images/tshirt-yellow.svg',
      alt: 'Raw Black T-Shirt Lineup - Yellow colorway',
      color: '#F59E0B',
      colorId: 'col-1',
    },
  ],

  sizes: [
    { id: 'sz-xs', label: 'XS', available: true },
    { id: 'sz-s',  label: 'S',  available: true },
    { id: 'sz-m',  label: 'M',  available: true },
    { id: 'sz-l',  label: 'L',  available: true },
    { id: 'sz-xl', label: 'XL', available: false },
  ],
  quantityInStock: 10,
  features: [
    'Premium quality cotton',
    'Comfortable and stylish',
    'Machine washable',
    'Available in multiple colors',
  ],
  category: 'T-Shirts',
  tags: ['black', 't-shirt', 'casual', 'premium'],
};

/**
 * MOCK RELATED PRODUCTS
 * Logic Team: Replace with API-fetched recommended products.
 */
export const mockRelatedProducts = [
  {
    id: 'rel-001',
    name: 'Recommended Raccoon Tee',
    price: 47.00,
    originalPrice: 61.00,
    rating: 4.5,
    image: '/images/related-raccoon-tee.svg',
    alt: 'Recommended Raccoon Tee',
  },
  {
    id: 'rel-002',
    name: 'Essential Raccoon Tee',
    price: 49.00,
    originalPrice: null,
    rating: 4.0,
    image: '/images/related-essential-tee.svg',
    alt: 'Essential Raccoon Tee',
  },
  {
    id: 'rel-003',
    name: "L'Parallel Skirt",
    price: 79.00,
    originalPrice: 95.00,
    rating: 3.5,
    image: '/images/related-parallel-skirt.svg',
    alt: "L'Parallel Skirt",
  },
];

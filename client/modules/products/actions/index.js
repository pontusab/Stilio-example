import loadProducts from './loadProducts';
import loadProduct from './loadProduct';
import saveProduct from './saveProduct';
import deleteProduct from './deleteProduct';
import uploadImage from './uploadImage';

// Load products
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

// Load product form id
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';

// Update edit product
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';

// Save product
export const PRODUCT_SAVE_REQUEST = 'PRODUCT_SAVE_REQUEST';
export const PRODUCT_SAVE_SUCCESS = 'PRODUCT_SAVE_SUCCESS';
export const PRODUCT_SAVE_FAILURE = 'PRODUCT_SAVE_FAILURE';

// Delete product
export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST';
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS';
export const PRODUCT_DELETE_FAILURE = 'PRODUCT_DELETE_FAILURE';

// Upload image
export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';

// On location change
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export {
  loadProducts,
  loadProduct,
  saveProduct,
  deleteProduct,
  uploadImage,
};

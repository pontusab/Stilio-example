import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_UPDATE,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  LOCATION_CHANGE,
} from './actions';

function products(state = { items: [] }, action) {
  switch (action.type) {
  case PRODUCTS_REQUEST:
    return { ...state, isFetching: true };
  case PRODUCTS_SUCCESS:
    return { items: action.payload };
  default:
    return state;
  }
}

function editProduct(state = {}, action) {
  switch (action.type) {
  case PRODUCT_REQUEST:
    return { isFetching: true };
  case PRODUCT_SUCCESS:
    return action.payload;
  case PRODUCT_UPDATE:
    return { ...state, ...action.payload };
  case LOCATION_CHANGE:
  case PRODUCT_DELETE_SUCCESS:
  case PRODUCT_SAVE_SUCCESS:
    return {};
  default:
    return state;
  }
}

export {
  products,
  editProduct,
};

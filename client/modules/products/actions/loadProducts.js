import { callApi } from 'middleware/api';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from './';

export default function loadProducts() {
  return (dispatch) => {
    dispatch({ type: PRODUCTS_REQUEST });

    callApi('/products').then(
      // Simulate slow network request
      (payload) => setTimeout(() => dispatch({ type: PRODUCTS_SUCCESS, payload }), 500),
      (error) => dispatch({ type: PRODUCTS_FAILURE, payload: error }),
    );
  };
}

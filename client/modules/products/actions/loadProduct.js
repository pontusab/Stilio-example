import { callApi } from 'middleware/api';
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from './';

export default function loadProduct(id) {
  if (!id) return (d) => d;
  return (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });

    callApi(`/products/${id}`).then(
      // Simulate slow network request
      (payload) => setTimeout(() => dispatch({ type: PRODUCT_SUCCESS, payload }), 500),
      (error) => dispatch({ type: PRODUCT_FAILURE, payload: error }),
    );
  };
}

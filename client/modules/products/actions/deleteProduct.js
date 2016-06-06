import { push } from 'react-router-redux';
import { callApi } from 'middleware/api';
import {
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
} from './';

export default function deleteProduct(id) {
  if (!id) return (d) => d;
  return (dispatch) => {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    callApi(`/products/${id}`, 'DELETE').then(
      (payload) => dispatch({ type: PRODUCT_DELETE_SUCCESS, payload }),
      (error) => dispatch({ type: PRODUCT_DELETE_FAILURE, payload: error }),
    ).then(() => dispatch(push('/')));
  };
}

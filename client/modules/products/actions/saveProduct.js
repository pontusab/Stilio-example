import { push } from 'react-router-redux';
import { callApi } from 'middleware/api';
import {
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAILURE,
} from './';

export default function saveProduct({ name, price, image_uuid }, id) {
  const appendId = id ? `/${id}` : '';
  const method = id ? 'PUT' : 'POST';

  return (dispatch) => {
    dispatch({ type: PRODUCT_SAVE_REQUEST });
    callApi(`/products${appendId}`, method, { name, price, image_uuid }).then(
      (payload) => dispatch({ type: PRODUCT_SAVE_SUCCESS, payload }),
      (error) => dispatch({ type: PRODUCT_SAVE_FAILURE, payload: error }),
    ).then(() => dispatch(push('/')));
  };
}

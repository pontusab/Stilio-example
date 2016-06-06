import { upload } from 'middleware/api';
import {
  UPLOAD_REQUEST,
  PRODUCT_UPDATE,
  UPLOAD_FAILURE,
} from './';

export default function uploadImage(blob) {
  return (dispatch) => {
    dispatch({ type: UPLOAD_REQUEST });
    upload(blob).then(
      (payload) => dispatch({ type: PRODUCT_UPDATE, payload }),
      (error) => dispatch({ type: UPLOAD_FAILURE, payload: error }),
    );
  };
}

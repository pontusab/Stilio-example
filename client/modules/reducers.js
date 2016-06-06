import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { products, editProduct } from './products/reducers';

const rootReducer = combineReducers({
  products,
  editProduct,
  routing: routerReducer,
});

export default rootReducer;

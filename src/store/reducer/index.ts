import { combineReducers } from "redux";

import products from './products.reducer'
import carts from './carts.reducer'
const reducer = combineReducers({ products, carts },);

export default reducer;

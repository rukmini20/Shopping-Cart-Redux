import {
  PRODUCT_FETCH_SUCCESS, PRODUCT_FETCH_FAILURE,RESET_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY
} from "../constants";
import productsService from "../services/products.service";
import { ActionI, ProductI } from "../../interfaces";
const initialState = {
  products: [],
  type: null,
};

const products = (state = initialState, action: ActionI) => {
  let products:Array<ProductI>=[]
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return { ...state, products: action.payload, type: PRODUCT_FETCH_SUCCESS };
    case PRODUCT_FETCH_FAILURE:
      return { ...state, products: action.payload, type: PRODUCT_FETCH_FAILURE };
    case RESET_PRODUCT:
      return { ...state, products: action.payload, type: RESET_PRODUCT };
    case INCREASE_QUANTITY:
      products = productsService.increaseQuantity(action.payload, [...state.products],);
      return { ...state, products: products, type: INCREASE_QUANTITY }
    case DECREASE_QUANTITY:
      products = productsService.decreaseQuantity(action.payload, [...state.products],);
      return { ...state, products: products, type: DECREASE_QUANTITY };
    default:
      return state;
  }
};

export default products;

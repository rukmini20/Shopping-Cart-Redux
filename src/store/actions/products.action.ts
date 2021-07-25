import productsService from "../services/products.service";
import { ProductI } from "../../interfaces"; 
import { RESET_PRODUCT,INCREASE_QUANTITY, DECREASE_QUANTITY} from "../constants";
const fetch = (values: any) => async (dispatch: Function) => {
  const result = await productsService.fetch(values);
  dispatch(result);
};
const resetProducts=()=>(dispatch: Function)=> {
  dispatch({type: RESET_PRODUCT, payload: []})
}
const increaseQuantity = (product: ProductI,) => async (dispatch: Function) => {
  dispatch({ payload: product, type: INCREASE_QUANTITY });
};
const decreaseQuantity = (product: ProductI) => async (dispatch: Function) => {
    dispatch({ payload: product, type: DECREASE_QUANTITY });
};
export { fetch, resetProducts, increaseQuantity, decreaseQuantity };

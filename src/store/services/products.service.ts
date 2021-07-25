import { PRODUCT_FETCH_FAILURE, PRODUCT_FETCH_SUCCESS, } from "../constants";
import { getproductsAPI } from "../../networks/apis/productsAPI";
import {ProductI} from '../../interfaces'
const fetch = async (values: any) => {
  try {
    let { status, body } = await getproductsAPI(values);
    if (status === 200) {
      if(body.length) {
        body=body.map((item: ProductI)=>({...item, count: 0}))
      }
      
      return { payload: body, type: PRODUCT_FETCH_SUCCESS };
    } else {
      return {
        payload: null,
        type: PRODUCT_FETCH_FAILURE,
      };
    }
  } catch (error) {
    return { payload: null, type: PRODUCT_FETCH_FAILURE };
  }
};
const increaseQuantity=(product: ProductI, products: Array<ProductI>):Array<ProductI>=>  {
  products=products?.map((item)=>  {
    if(item.id===product.id)  {
      return {...item, count: ++item.count}
    }
    return item
  })
  return products
}
const decreaseQuantity=(product: ProductI, products: Array<ProductI>):Array<ProductI>=>  {
  products=products?.map((item)=>  {
    if(item.id===product.id && item.count>0)  {
      return {...item, count: --item.count}
    }
    return item
  })
  return products 
}
const productsService = { fetch,increaseQuantity,decreaseQuantity };
export default productsService;

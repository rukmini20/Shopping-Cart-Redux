
import {ProductI} from '../../interfaces'

const addItem=(cart: ProductI, carts: Array<ProductI>):Array<ProductI>=>  {
    try{
        const cartIndex=carts?.findIndex(item=>cart.id===item.id)
        if(cartIndex>-1)   {
            carts[cartIndex]={...carts[cartIndex], count: ++carts[cartIndex].count}
        }   else    {
            carts.push({...cart, count: ++cart.count})
        }
    }
    catch(error)    {

    }
    return carts
}
const removeItem=(cart: ProductI, carts: Array<ProductI>):Array<ProductI>=>  {
    const cartIndex=carts.findIndex(item=>cart.id===item.id)
    if(cartIndex>-1)   {
        carts[cartIndex]={...carts[cartIndex], count: --carts[cartIndex].count}
        if(carts[cartIndex].count===0)  {
            carts.splice(cartIndex, 1)
        }
    }
    return carts   
}
const cartsService = { addItem, removeItem };
export default cartsService;

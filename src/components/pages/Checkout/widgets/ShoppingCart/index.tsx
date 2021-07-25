import {useEffect, useState} from 'react'
import { connect } from "react-redux";
import CartItem from '../CartItem'
import { ProductI } from '../../../../../interfaces'
import styles from './index.module.scss'
const ShoppingCart = (props: any) => {
    let [cartItems, setCartItems]=useState<Array<ProductI>>([])
    const [totalPrice, setTotalPrice]=useState<number>(0)
    useEffect(()=>  {
        if(props.carts.length>0)    {
            //  eslint-disable-next-line
            cartItems=props.carts
            setCartItems(cartItems)
            cartItems.forEach(item=>setTotalPrice(prev=>prev+(item.count*item.price)))
        }
    }, [props.carts])

    return (
        <div className={styles.background}>
            {cartItems.map(({id,
                title,
                price,
                description,
                category,image,count}:ProductI)=><CartItem key={id} id={id} title={title} price={price} description={description} category={category} image={image} count={count} />)}
            <div className={`${styles.total} d-flex justify-content-between`}>
                <div>Total: </div>
                <div>₹ {totalPrice.toFixed(2)}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ carts }:any) => ({
    carts: carts?.carts
  });
  export default connect(mapStateToProps, {  })(ShoppingCart);
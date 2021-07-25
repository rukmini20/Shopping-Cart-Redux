import React from 'react'
import ShoppingCart from './widgets/ShoppingCart'
import styles from './index.module.scss'
const Checkout = () => {
    return (
        <div className={styles.background}>
            <div className={styles.title}>Shopping Cart</div>
            <ShoppingCart   />
            
        </div>
    )
}

export default Checkout

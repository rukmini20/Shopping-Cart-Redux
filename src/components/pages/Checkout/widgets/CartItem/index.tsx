import React from 'react'
import { ProductI } from '../../../../../interfaces'
import TitleValue from '../TitleValue'
import styles from './index.module.scss'
const CartItem = ({id,
    title,
    price,
    description,
    category,image,count}:ProductI) => {
    return (
        <div className={`${styles.background}`}>
            <div className=' d-flex justify-content-between'>
                <div className={`d-flex`}>
                    <div>
                        <img src={image} alt={title} className={styles.image}   />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.title}>
                            {title}
                        </p>
                        <TitleValue title='Price' value={price} />                    
                        <TitleValue title='Quantity' value={count} />
                    </div>
                </div>
                <div className={styles.priceCount}>
                    ₹ {price*count}
                </div>
            </div>
        </div>
    )
}

export default CartItem

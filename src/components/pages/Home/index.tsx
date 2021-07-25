import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import { ProductI } from '../../../interfaces'
import { fetch, increaseQuantity, decreaseQuantity, } from '../../../store/actions/products.action'
import { addItem, removeItem } from '../../../store/actions/carts.action'
import Product from './widgets/Product'
import styles from './index.module.scss'
const Home = (props: any) => {
  const [products,setProducts]=useState<Array<Array<ProductI>>>([])
  
  useEffect(() => {
    console.log('~~~ len: ',props.products.length)
    if(props.products.length===0) {
      props.fetch('')
    }
    // eslint-disable-next-line
  }, [])
  useEffect(()=>  {
    console.log('~~~ prod: ',props.products)
    if(props.products?.length>0)  {  
      setRowsAndColumns([...props.products])
    }   
    // eslint-disable-next-line
  }, [props.products])
  const editCart=(product: ProductI, add: boolean)=>  {
    if(add) {
      props.addItem(product)
      props.increaseQuantity(product)
    } else  { 
        props.removeItem(product)
        props.decreaseQuantity(product)
    }
  }
  const setRowsAndColumns=(productsFetched: Array<ProductI>)=>  {

    let tempRows:Array<Array<ProductI>>=[]
    while(productsFetched?.length>0) {
      tempRows.push(productsFetched.splice(0,3)) 
    }
    setProducts(tempRows)
  }

  return <div className={`${styles.background}`}>
    {
      products?.map((rowItem: Array<ProductI>, index: number)=>(
        <div key={index} className='row justify-content-around'>
          {
            rowItem?.map(({id,
              title,
              price,
              description,
              category,image,count})=> (
              <div key={id} className='col-3'>
                <Product id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  count={count}
                  editCart={editCart}
                />
              </div>
            ))
          }
        </div>
      ))
    }
  </div>;
};

const mapStateToProps = ({ products }: any) => ({
  products: products?.products,
});
export default connect(mapStateToProps, { fetch, addItem, removeItem, increaseQuantity, decreaseQuantity })(Home);
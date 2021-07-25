import {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { useHistory, useLocation } from 'react-router';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon, ShoppingCart as ShoppingCartIcon } from "@material-ui/icons";
import styles from "./index.module.scss";
import {routePaths} from '../../../PageRoutes/routes'
import {resetCart} from '../../../store/actions/carts.action'
import {resetProducts} from '../../../store/actions/products.action'
const HeadAppBar = (props: any) => {
  const location:any=useLocation()
  const [cartItemsCount,setCartItemsCount]=useState<number>(0)
  const history=useHistory()
  const [buttonText, setButtonText]=useState<string>('CHECKOUT')
  useEffect(()=>{
    if(typeof props.carts?.carts?.length==='number')  {
      setCartItemsCount(props.carts.carts.length)
    }
  }, [props.carts])
  useEffect(()=>  {
    if(location.pathname===routePaths.Checkout) {
      setButtonText('PAY')
    } else  {
      setButtonText('CHECKOUT')
    }
  }, [location.pathname])
  return (
      <div className={styles.background}>
        <AppBar position="fixed">
          <Toolbar>
                <IconButton
                  onClick={() => {}}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Shopping Cart App</Typography>
                <div className={styles.cart}>{cartItemsCount} items</div>
                <ShoppingCartIcon className={styles.cartIcon} />
                {cartItemsCount?<Button className={styles.checkoutBtn} onClick={()=>{
                  if(buttonText==='CHECKOUT') {
                    history.push(routePaths.Checkout)
                  } else if(buttonText==='PAY') {
                    props.resetCart()
                    props.resetProducts()
                    history.replace(routePaths.Feedback)
                  }

                }}>{buttonText}</Button>:null}
               
          </Toolbar>
        </AppBar>
      </div>
  );
};
const mapStateToProps = ({ carts }:any) => ({
  carts: carts
});
export default connect(mapStateToProps, { resetCart, resetProducts })(HeadAppBar);

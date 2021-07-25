import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import styles from './index.module.scss'
import { ProductI } from '../../../../../interfaces'
import {RoundButton} from '../../../../widgets'
interface Props extends ProductI  {
  editCart: Function
}
const Product = ({id,
  title,
  price,
  description,
  category,image,count,editCart}:Props) => {
    const descriptionLength:number=150
  return (
    <div className={styles.background}>
        <Card>
        <CardActionArea>
          <img className={styles.image} src={image} alt={title}  />
          <CardContent>
            <Typography variant="h6" component="h6">
              <div>{title}</div>
              <div className={styles.price}>₹ {price}</div>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description.length>descriptionLength?`${description.substring(0,descriptionLength)}....`:description}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions className='d-flex justify-content-center my-auto'>
        <div className={styles.addIcon}><RoundButton Icon={AddIcon} method={()=>{
          editCart({id,
            title,
            price,
            description,
            category,image,count}, true)
        }}  /></div>
        <div className={`align-items-center ${styles.count} ${styles.addIcon}`}>{count}</div>
        <div><RoundButton Icon={RemoveIcon} method={()=>{ editCart({id,
            title,
            price,
            description,
            category,image,count}, false)}}/></div>
      </CardActions>
    </Card>
    </div>
  )
}

export default Product

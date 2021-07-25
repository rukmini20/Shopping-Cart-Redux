import React from 'react'
import {useHistory} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {ButtonPrimary} from '../../widgets'

import {routePaths} from '../../../PageRoutes/routes'
import styles from './index.module.scss'
const Feedback = () => {
    const history:any=useHistory()
    return (
        <div className={`${styles.background} d-flex justify-content-center`}>
             <Card>
      <CardContent>
        <p className={styles.title}>
        Payment is successful
        </p>
        <p>
            Your order will be delivered by tomorrow....
        </p>
      </CardContent>
      <CardActions className='d-flex justify-content-center my-auto'>
        <div>
            <ButtonPrimary title='Back to Home' onClick={()=>{
                history.replace(routePaths.Home)
            }}  />
        </div>
      </CardActions>
    </Card>
        </div>
    )
}

export default Feedback

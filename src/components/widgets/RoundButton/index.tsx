import React from 'react'
import { IconButton } from '@material-ui/core';
import styles from "./index.module.scss";
interface Props {
    Icon: any
    method: Function
}
const RoundButton = ({Icon,method}:Props) => {
    return (
        <div className={styles.background}>
            <IconButton onClick={method.bind(this,)}>
                <Icon   />
            </IconButton>
        </div>
    )
}

export default RoundButton

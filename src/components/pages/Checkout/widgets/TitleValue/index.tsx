import React from 'react'
import styles from './index.module.scss'
interface Props {
    title: string
    value: any
}

const TitleValue = ({title, value}:Props) => {
    return (
        <p className={styles.background}>
            <span className={styles.title}>{title}: </span>{value}
        </p>
    )
}

export default TitleValue

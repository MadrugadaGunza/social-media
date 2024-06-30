// styles
import styles from './FeedStoryItem.module.css'
// dependencies
import React from 'react'

const FeedStoryItem = ({ item }) => {
    return (
        <article className={styles.card}>
            <img src={item.avatar} alt={item.name} />
            <div><h5>{item.name}</h5></div>
        </article>
    )
}

export default FeedStoryItem
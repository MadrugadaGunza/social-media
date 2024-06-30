import styles from './FriendItem.module.css'
import React from 'react'

const FriendItem = ({ image, name }) => {
    return (
        <article className={styles.item}>
            <div className={styles.profile}>
                <img src={image} alt={name} />
                <div>
                    <h5>{name}</h5>
                    <p>13 Mutual Friends</p>
                </div>
                <div></div>
            </div>
        </article>
    )
}

export default FriendItem
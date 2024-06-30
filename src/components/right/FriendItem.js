import styles from './FriendItem.module.css'
import React from 'react'
import pic from '../../assets/profile-pic.png'

const FriendItem = () => {
    return (
        <article className={styles.item}>
            <div className={styles.profile}>
                <img src={pic} alt='avatar' />
                <div>
                    <h5>Madrugada de Carvalho</h5>
                    <p>13 Mutual Friends</p>
                </div>
                <div></div>
            </div>
        </article>
    )
}

export default FriendItem
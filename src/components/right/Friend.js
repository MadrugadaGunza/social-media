import { Link } from 'react-router-dom'
import styles from './Friend.module.css'
import React from 'react'
import FriendItem from './FriendItem'

const Friend = () => {
    return (
        <section className={styles.friend}>
            <div className={styles.friendTitle}>
                <h3>Friend Requests</h3>
                <Link to='/friends'>View all</Link>
            </div>
            <FriendItem />
            <FriendItem />

            <div className={`${styles.friendTitle} ${styles.activity}`}>
                <h3>Activity</h3>
                <Link to='/activity'>View all</Link>
            </div>
            <FriendItem />
            <FriendItem />
            <FriendItem />
        </section>
    )
}

export default Friend
import { Link } from 'react-router-dom'
import styles from './Friend.module.css'
import React from 'react'
import FriendItem from './FriendItem'

const Friend = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/users');
            const result = await response.json();
            setData(result);
        }
        fetchPosts();
    }, [])

    return (
        <section className={styles.friend}>
            <div className={styles.friendTitle}>
                <h3>Friend Requests</h3>
                <Link to='/friends'>View all</Link>
            </div>
            {data.slice(0, 5).map((item) => <FriendItem key={item.id} name={item.name} image={item.avatar} />)}

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
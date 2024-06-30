import styles from './FeedPostsItem.module.css'
import React from 'react'
// images
import pic from '../../assets/profile-pic.png'

const FeedPostsItem = ({ item }) => {
    return (
        <article className={styles.item}>
            <div className={styles.profile}>
                <img src={pic} alt='avatar' />
                <div>
                    <h5>{item.title}</h5>
                    {/* <p>{item.title}</p> */}
                </div>
            </div>
            <div className={styles.description}>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                <div className={styles.buttons}>
                    <button>{item.rating.count} Likes</button>
                    <button>{item.price} Comentarios</button>
                    <button>{item.rating.rate} Stores</button>
                </div>
            </div>
        </article>
    )
}

export default FeedPostsItem
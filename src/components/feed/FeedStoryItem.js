// styles
import styles from './FeedStoryItem.module.css'
// dependencies
import React from 'react'
// images
import pic2 from '../../assets/img-story.jpg'

const FeedStoryItem = () => {
    return (
        <article className={styles.card}>
            <img src={pic2} alt='story' />
            <div>
                <h5>Name Friend</h5>
            </div>
        </article>
    )
}

export default FeedStoryItem
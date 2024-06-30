// styles
import styles from './FeedPosts.module.css'
// dependencies
import React from 'react'
import FeedPostsItem from './FeedPostsItem'

const FeedPosts = () => {
    return (
        <section className={styles.posts}>
            <FeedPostsItem />
            <FeedPostsItem />
            <FeedPostsItem />
        </section>
    )
}

export default FeedPosts
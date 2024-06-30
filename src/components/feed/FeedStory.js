// styles 
import styles from './FeedStory.module.css';
// dependencies
import React from 'react'
// components
import FeedStoryItem from './FeedStoryItem';

const FeedStory = () => {
    return (
        <div className={styles.story}>
            <FeedStoryItem />
            <FeedStoryItem />
            <FeedStoryItem />
            <FeedStoryItem />
        </div>
    )
}

export default FeedStory
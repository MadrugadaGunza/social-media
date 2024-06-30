// dependencies
import React from 'react'
//components
import FeedStory from './FeedStory';
import Post from './Post';
import FeedPosts from './FeedPosts';

const Feed = () => {
    return (
        <section>
            <FeedStory />
            <Post />
            <FeedPosts />
        </section>
    )
}

export default Feed
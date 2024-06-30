// styles 
import styles from './FeedStory.module.css';
// dependencies
import React from 'react'
// components
import FeedStoryItem from './FeedStoryItem';

const FeedStory = () => {
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
        <div className={styles.story}>
            {data.slice(0, 4).map((item) => <FeedStoryItem key={item.id} item={item} />)}
        </div>
    )
}

export default FeedStory
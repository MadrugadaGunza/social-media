// styles
import styles from './FeedPosts.module.css'
// dependencies
import React from 'react'
import FeedPostsItem from './FeedPostsItem'

const FeedPosts = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const result = await response.json();
            console.log(result);
            setData(result);
        }
        fetchPosts();
    }, [])

    return (
        <section className={styles.posts}>
            {data.map((item) => <FeedPostsItem key={item.id} item={item} />)}
        </section>
    )
}

export default FeedPosts
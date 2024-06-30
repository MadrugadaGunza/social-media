// styles
import styles from './Home.module.css';
// dependencies
import React from 'react'
// components
import Feed from '../components/feed/Feed';
import Sidebar from '../components/sidebar/Sidebar';
import Right from '../components/right/Right';

const Home = () => {
    return (
        <section className={`${styles.home} container`}>
            <Sidebar />
            <Feed />
            <Right />
        </section>
    )
}

export default Home
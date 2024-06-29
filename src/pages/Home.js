// styles
import Sidebar from '../components/sidebar/Sidebar';
import styles from './Home.module.css';
import React from 'react'

const Home = () => {
    return (
        <section className={`${styles.home} container`}>
            <Sidebar />
            <div style={{ width: '100%', background: '#f31' }}>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
            </div>
            <div style={{ width: '100%', background: '#fb1' }}>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
            </div>
        </section>
    )
}

export default Home
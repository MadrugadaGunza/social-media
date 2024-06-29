// styles
import styles from './Header.module.css';
// dependencies
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.logo}>M2CG</Link>
            <nav className={styles.nav}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/story'>Story</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/groups'>Groups</NavLink>
                <NavLink to='/videos'>Videos</NavLink>
            </nav>
            <form className={styles.form}>
                <div className={styles.wrapper}>
                    <input type='search' name='search' id='search' placeholder='Search' />
                </div>
                <button className={styles.message}>msg</button>
                <button className={styles.notification}>nfc</button>
            </form>
        </header>
    )
}

export default Header
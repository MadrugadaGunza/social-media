// styles
import styles from './SidebarNav.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarNav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to='/my-posts'>My Posts</NavLink></li>
                <li><NavLink to='/activity'>Activity</NavLink></li>
                <li><NavLink to='/marketplace'>Marketplace</NavLink></li>
                <li><NavLink to='/events'>Events</NavLink></li>
                <li><NavLink to='/live-videos'>Live Videos</NavLink></li>
                <li><NavLink to='/support'>Support</NavLink></li>
                <li><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default SidebarNav
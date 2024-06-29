// styles
import styles from './Profile.module.css';
// dependencies
import React from 'react';
// images
import bg from '../../assets/react.png';
import pic from '../../assets/profile-pic.png';

const Profile = () => {
    return (
        <article className={styles.profile}>
            <img src={bg} alt='' className={styles.bg} />
            <img src={pic} alt='' className={styles.pic} />
            <div className={styles.description}>
                <h5>Madrugada de Carvalho</h5>
                <button>My Profile</button>
            </div>
        </article>
    )
}

export default Profile
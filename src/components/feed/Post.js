// styles
import styles from './Post.module.css'
// dependencies
import React from 'react'
// images
import pic from '../../assets/profile-pic.png'

const Post = () => {
    return (
        <section className={styles.post}>
            <div className={styles.wrapper}>
                <img src={pic} alt='avatar' />
                <input type='text' placeholder="What's on your mind, Madrugada?" />
            </div>
            <div className={styles.buttons}>
                <div>
                    <button>Go Live</button>
                    <button>Image/Video</button>
                    <button>Activity</button>
                </div>
                <button>Public</button>
            </div>
        </section>
    )
}

export default Post
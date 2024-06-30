// styles
import styles from './SidebarProfile.module.css';
// dependencies
import React from 'react';
// images
import bg from '../../assets/react.png';

const Profile = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/users/1');
            const result = await response.json();
            setData(result);
        }
        fetchPosts();
    }, [])

    return (
        <article className={styles.profile}>
            <img src={bg} alt='' className={styles.bg} />
            <img src={data.avatar} alt={data.name} className={styles.pic} />
            <div className={styles.description}>
                <h5>{data.name}</h5>
                <button>Perfil</button>
            </div>
        </article>
    )
}

export default Profile
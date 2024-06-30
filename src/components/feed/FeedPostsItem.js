import styles from './FeedPostsItem.module.css'
import React from 'react'
// images
import pic from '../../assets/profile-pic.png'
import post from '../../assets/react.png'

const FeedPostsItem = () => {
    return (
        <article className={styles.item}>
            <div className={styles.profile}>
                <img src={pic} alt='avatar' />
                <div>
                    <h5>Madrugada de Carvalho</h5>
                    <p>29 de Maio de 2024, 10h30min</p>
                </div>
            </div>
            <div className={styles.description}>
                <p>
                    COMO FICAR MAIS INTELIGENTE?
                    Algumas pessoas tendem a acreditar que a inteligência é algo imutável e inerente
                    de alguns. Porém, existem diversos métodos que podem aumentar as habilidades
                    cognitivas e fazer com que as pessoas se tornem mais eficazes em suas atividades
                    profissionais e pessoais. Uma dica importante é que se você quer se tornar mais
                    inteligente, deve criar hábitos que irão aumentar suas capacidades intelectuais
                    e nutrir sua mente.
                </p>
                <img src={post} alt='post' />
                <div className={styles.buttons}>
                    <button>1.5k Likes</button>
                    <button>100 Comments</button>
                    <button>300 Stores</button>
                </div>
            </div>
        </article>
    )
}

export default FeedPostsItem
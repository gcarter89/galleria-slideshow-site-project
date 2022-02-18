import styles from './Card.module.scss';

export function Card({ data }) {  
    const dataImage = require('../../' + data.images.thumbnail);

    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={dataImage} alt={data.names} />
            <div className={styles.card__copy}>
                <h1>{data.name}</h1>
                <h2>{data.artist.name}</h2>
            </div>
        </div>
    )
}
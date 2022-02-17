import styles from './Card.module.scss';
import ArnolfiniThumbnail from '../../Assets/arnolfini-portrait/thumbnail.jpg';
import StarryNightThumbnail from '../../Assets/starry-night/thumbnail.jpg';
import MonaLisaThumbNail from '../../Assets/mona-lisa/thumbnail.jpg';


export function Card() {
    return (
        <>
        <div className={styles.card}>
            <img className={styles.card__img} src={ArnolfiniThumbnail} alt="arnolfini" />
            <div className={styles.card__copy}>
                <h1>Arnolfini Portrait</h1>
                <h2>Jan van Eyck</h2>
            </div>
        </div>
        <div className={styles.card}>
            <img className={styles.card__img} src={StarryNightThumbnail} alt="arnolfini" />
            <div className={styles.card__copy}>
                <h1>Starry Night</h1>
                <h2>Vincent van Gogh</h2>
            </div>
        </div>
        <div className={styles.card}>
            <img className={styles.card__img} src={MonaLisaThumbNail} alt="arnolfini" />
            <div className={styles.card__copy}>
                <h1>Mona Lisa</h1>
                <h2>Leonardo Da Vinci</h2>
            </div>
        </div>
        </>
    )
}
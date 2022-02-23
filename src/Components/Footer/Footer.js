import styles from './Footer.module.scss';
import buttonBackImage from '../../assets/shared/icon-back-button.svg';
import buttonForwardImage from '../../assets/shared/icon-next-button.svg';


export function Footer({selectedArtwork, progressPercentage}) {

    const progressStyles = {
        width: `${progressPercentage}%`
    }

    return (
    <footer className={styles.footer}>
        <span style={progressStyles} className={styles.footer__progress}></span>
        <div className={styles.footer__artworkInfo}>
            <h1 className={styles.footer__artworkTitle}>{selectedArtwork.name}</h1>
            <h2 className={styles.footer__artistName}>{selectedArtwork.artist.name}</h2>
        </div>
        <div className={styles.footer__artworkButtons}>
            <button className={styles.footer__buttonBack}>
                <img src={buttonBackImage} alt="button back" />
            </button>
            <button className={styles.footer__buttonForward}>
                <img src={buttonForwardImage} alt="button forward" />
            </button>
        </div>

    </footer>

    )
}
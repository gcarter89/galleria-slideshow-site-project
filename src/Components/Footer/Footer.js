import styles from './Footer.module.scss';
import buttonBackImage from '../../assets/shared/icon-back-button.svg';
import buttonForwardImage from '../../assets/shared/icon-next-button.svg';
import { useEffect, useState } from 'react';


export function Footer({selectedArtwork, progressPercentage, setArtworkIndex, artworkIndex, dataLength}) {

    const [endOfSeries, setEndOfSeries] = useState(false);

    const [startOfSeries, setStartOfSeries] = useState(false);


    useEffect(() => {
        if (artworkIndex === dataLength) {
            setStartOfSeries(false);
            return setEndOfSeries(true);
        }

        if (artworkIndex === 0) {
            setEndOfSeries(false);
            return setStartOfSeries(true);
        }

        setStartOfSeries(false);
        setEndOfSeries(false);


    },[artworkIndex, dataLength])

    const progressStyles = {
        width: `${progressPercentage}%`
    }

    function handleBackButton(event) {
        event.preventDefault()
        const prevIndex = artworkIndex - 1;
        setArtworkIndex(prevIndex);
    }

    function handleForwardButton(event) {
        event.preventDefault();
        const nextIndex = artworkIndex + 1;
        setArtworkIndex(nextIndex);

    }


    return (
    <footer className={styles.footer}>
        <span style={progressStyles} className={styles.footer__progress}></span>
        <div className={styles.footer__artworkInfo}>
            <h1 className={styles.footer__artworkTitle}>{selectedArtwork.name}</h1>
            <h2 className={styles.footer__artistName}>{selectedArtwork.artist.name}</h2>
        </div>
        <div className={styles.footer__artworkButtons}>
            {startOfSeries ? 
                <button>
                    <img src={buttonBackImage} className={styles.footer__buttonBack + ' ' + styles._end}  alt="button back" />
                </button>
            :
                <button onClick={(e) => handleBackButton(e)} className={styles.footer__buttonBack}>
                    <img src={buttonBackImage} alt="button back" />
                </button>
            }

            {endOfSeries ?
                <button className={styles.footer__buttonForward + ' ' + styles._end}>
                    <img src={buttonForwardImage} alt="button forward" />
                </button>
            :
                <button onClick={(e) => handleForwardButton(e)} className={styles.footer__buttonForward}>
                    <img src={buttonForwardImage} alt="button forward" />
                </button>
            }
        </div>

    </footer>

    )
}
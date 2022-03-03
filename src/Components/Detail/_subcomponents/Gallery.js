import styles from './Gallery.module.scss';


export function Gallery({selectedArtwork, handleViewImageClose}) {
    const galleryImage = require('../../../' + selectedArtwork.images.gallery);


    return (
        <div className={styles.gallery}>
            <div className={styles.gallery__container}>
                <button onClick={(e) => handleViewImageClose(e)} className={styles.gallery__button}>CLOSE</button>
                <img className={styles.gallery__image} src={galleryImage} alt='gallery pic' />
            </div>
        </div>

    )
}
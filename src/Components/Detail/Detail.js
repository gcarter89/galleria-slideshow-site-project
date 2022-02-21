import styles from './Detail.module.scss';
import viewImageIcon from '../../assets/shared/icon-view-image.svg';

export function Detail({selectedArtwork}) {
    console.log(selectedArtwork);

    const heroImageSmall = require('../../' + selectedArtwork.images.hero.small);
    const heroImageLarge = require('../../' + selectedArtwork.images.hero.large);
    const artistImage = require('../../' + selectedArtwork.artist.image);
    


    return (
        <main className={styles.detail}>
            <div className={styles.detail__hero}>
                <button className={styles.detail__viewImage}>
                    <img className={styles.detail__imageIcon} src={viewImageIcon} alt="view img" />
                    VIEW IMAGE
                </button>
                <picture>
                    <source srcSet={heroImageLarge}
                        media="(min-width: 768px)" />
                    <img className={styles.detail__img} src={heroImageSmall} alt='Hero for artwork' />
                </picture>
                <div className={styles.detail__heroText}>
                    <div className={styles.detail__nameGroup}>
                        <h1 className={styles.detail__artworkName}>{selectedArtwork.name}</h1>
                        <h2 className={styles.detail__artistName}>{selectedArtwork.artist.name}</h2>
                    </div>
                    
                    <img className={styles.detail__artistImage} src={artistImage} alt="artist" />
                </div>
            </div>
            <section className={styles.detail__copy}>
                <h1 className={styles.detail__artworkYear}>{selectedArtwork.year}</h1>
                <p className={styles.detail__artworkText}>{selectedArtwork.description}</p>
                <a className={styles.detail__source} href={selectedArtwork.source} rel='noreferrer' target='_blank'>GO TO SOURCE</a>
            </section>
        </main>
        

    )
}
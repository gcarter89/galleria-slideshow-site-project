import styles from './Detail.module.scss';

export function Detail({selectedArtwork}) {
    console.log(selectedArtwork);

    const heroImageSmall = require('../../' + selectedArtwork.images.hero.small);
    const heroImageLarge = require('../../' + selectedArtwork.images.hero.large);
    const artistImage = require('../../' + selectedArtwork.artist.image);
    


    return (
        <main className={styles.detail}>
            <div className={styles.detail__hero}>
                <picture>
                    <source srcSet={heroImageLarge}
                        media="(min-width: 768px)" />
                    <img className={styles.detail__img} src={heroImageSmall} alt='Hero for artwork' />
                </picture>
                <div className={styles.detail__heroText}>
                    <h1 className={styles.detail__artworkName}>{selectedArtwork.name}</h1>
                    <h2 className={styles.detail__artistName}>{selectedArtwork.artist.name}</h2>
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
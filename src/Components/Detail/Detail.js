import styles from './Detail.module.scss';
import viewImageIcon from '../../assets/shared/icon-view-image.svg';
import { Gallery } from './_subcomponents/Gallery.js';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function Detail({selectedArtwork, handleArtworkChange, viewImage, setViewImage}) {

    const heroImageSmall = require('../../' + selectedArtwork.images.hero.small);
    const heroImageLarge = require('../../' + selectedArtwork.images.hero.large);
    const artistImage = require('../../' + selectedArtwork.artist.image);

    let timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }


    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(handleArtworkChange, 7500); 

        if (viewImage) {
            resetTimeout();
        }

        return () => {
            resetTimeout();
        }

    },[handleArtworkChange, viewImage])


    function handleViewImageOpen(event) {
        event.preventDefault();
        setViewImage(true);
        document.body.style.overflow = 'hidden';
    }

    function handleViewImageClose(event) {
        event.preventDefault();
        setViewImage(false);
        document.body.style.overflow = 'unset';
    }




    return (
        <motion.main 
            key='detail-main'
            initial={{opacity: 0, y: 200, transition: { ease: 'easeInOut', duration: 0.8}}}
            animate={{opacity: 1, y: 0, transition: { ease: [.6, .01, -.05, .95], duration: 1.6, delay: 0.8}}}
            exit ={{opacity: 0, y: 200, transition: { ease: 'easeInOut', duration: 0.8}}}
            className={styles.detail}>
        {viewImage ? <Gallery handleViewImageClose={handleViewImageClose} selectedArtwork={selectedArtwork} />: null}
            <div className={styles.detail__hero}>
                <button onClick={(e) => handleViewImageOpen(e)} className={styles.detail__viewImage}>
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
        </motion.main>
        

    )
}
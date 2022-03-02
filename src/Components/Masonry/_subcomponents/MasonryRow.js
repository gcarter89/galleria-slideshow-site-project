import styles from '../Masonry.module.scss';
import { Card } from '../../Card/Card';
import { motion } from 'framer-motion'

export function MasonryRow({rowArray, handleArtworkSelect}) {

    const container = {
        show: {
            transition: {
                staggerChildren: 0.25,
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.125,
                staggerDirection: -1,
            }
        }
    }

    const cardItem = {
        hidden: {
            opacity: 0,
            y: 200
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.6, .01, -.05, .95],
                duration: 1.6
            }
        },
        exit: {
            opacity: 0,
            y: 200,
            transition: {
                ease: [.6, .01, -.05, .95],
                duration: 0.8,
            }
        }

    }

    const cards = rowArray.map((artwork, index) => {
        return (
            <Card variant={cardItem} key={index} data={artwork} handleArtworkSelect={handleArtworkSelect} />
        )
    })

    return (

       
        <motion.div
            className={styles.masonry__masonryRow}
            variants={container}
            initial= "hidden"
            animate= "show"
            exit= "exit"
            key="masonry-row"
            >
            {cards}
        </motion.div>
    )
}
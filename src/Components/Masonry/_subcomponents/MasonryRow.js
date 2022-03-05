import styles from '../Masonry.module.scss';
import { Card } from '../../Card/Card';
import { motion } from 'framer-motion'

export function MasonryRow({rowArray, handleArtworkSelect}) {

    const container = {
        hidden: {
            transition: {
                staggerChildren: 0.5,
            }
        },

        exit: {
            transition: {
                staggerChildren: 0.2,
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
                duration: 1.2,
                delay: 0.75
            }
        },
        exit: {
            opacity: 0,
            y: 650,
            transition: {
                ease: [.6, .01, -.05, .95],
                duration: 1.6,
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
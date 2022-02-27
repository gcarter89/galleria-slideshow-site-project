import styles from './Card.module.scss';
import { motion, AnimatePresence } from "framer-motion";

export function Card({ data, handleArtworkSelect, variants }) {  
    const dataImage = require('../../' + data.images.thumbnail);


    return (
        <AnimatePresence>

            <motion.div 
                variants={variants}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y:0 }}
                exit={{ opacity: 0 , y:+50}} 
                onClick={(e) => handleArtworkSelect(e, data)} className={styles.card}>
                <img className={styles.card__img} src={dataImage} alt={data.names} />
                <div className={styles.card__copy}>
                    <h1>{data.name}</h1>
                    <h2>{data.artist.name}</h2>
                </div>
            </motion.div>

        </AnimatePresence>

    )
}
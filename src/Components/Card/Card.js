import styles from './Card.module.scss';
import { motion } from "framer-motion";

export function Card({ data, handleArtworkSelect, variant }) {  
    const dataImage = require('../../' + data.images.thumbnail);


    return (
            <motion.div variants={variant}
                onClick={(e) => handleArtworkSelect(e, data)} className={styles.card}>
                <img className={styles.card__img} src={dataImage} alt={data.name} />
                <div className={styles.card__copy}>
                    <h1>{data.name}</h1>
                    <h2>{data.artist.name}</h2>
                </div>
            </motion.div>
    )
}
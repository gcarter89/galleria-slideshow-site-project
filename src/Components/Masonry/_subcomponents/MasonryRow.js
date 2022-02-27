import styles from '../Masonry.module.scss';
import { Card } from '../../Card/Card';

export function MasonryRow({rowArray, handleArtworkSelect}) {
    const cards = rowArray.map((artwork, index) => {
        return (
            <Card key={index} data={artwork} handleArtworkSelect={handleArtworkSelect} />
        )
    })


    return (
        <div className={styles.masonry__masonryRow}>
            {cards}
        </div>
    )
}
import styles from '../Masonry.module.scss';
import { Card } from '../../Card/Card';

export function MasonryMobile({ data, handleArtworkSelect }) {

    return (
        <div className={styles.masonry__masonryMobile}>
            {data.map((artwork, index) => {
                return (
                    <Card handleArtworkSelect={handleArtworkSelect} key={index} data={artwork} />
                )
        })}
        </div>
    )
}
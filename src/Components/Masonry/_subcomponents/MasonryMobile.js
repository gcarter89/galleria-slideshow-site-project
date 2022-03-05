import styles from '../Masonry.module.scss';
import { MasonryRow } from './MasonryRow'

export function MasonryMobile({ data, handleArtworkSelect }) {

    return (
        <div className={styles.masonry__masonryMobile}>
            <MasonryRow rowArray={data} handleArtworkSelect={handleArtworkSelect} />
        </div>
    )
}
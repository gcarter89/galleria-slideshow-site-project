import styles from '../Masonry.module.scss';
import { Card } from '../../Card/Card';

export function MasonryMobile({ data }) {


    return (
        <div className={styles.masonry__masonryMobile}>
            {data.map((artwork, index) => {
                return (
                    <Card key={index} data={artwork} />
                )
        })}
        </div>
    )
}
import styles from '../Main.module.scss';
import { Card } from '../../Card/Card';

export function MasonryMobile({ data }) {


    return (
        <div className={styles.main__masonryMobile}>
            {data.map((artwork, index) => {
                return (
                    <Card key={index} data={artwork} />
                )
        })}
        </div>
    )
}
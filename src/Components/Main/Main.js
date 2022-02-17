import { Card } from '../Card/Card';
import styles from './Main.module.scss';

export function Main() {
    return (
        <main className={styles.main}>
            <Card />
        </main>
    )
}
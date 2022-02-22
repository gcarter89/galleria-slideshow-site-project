import styles from '../Masonry.module.scss';
import { Card } from '../../Card/Card';

export function MasonryTablet({ data, handleArtworkSelect }) {
    let tabletRowArray1 = [];
    let tabletRowArray2 = [];

    data.forEach((entry, index) => {
        switch (index + 1) {
            case 1:
                //row 1 pos 1
                tabletRowArray1.push(entry);
                break;
            case 2:
                //row 2 pos 1
                tabletRowArray2.push(entry);
                break;
            case 3:
                //row 1 pos 2
                tabletRowArray1.push(entry);
                break;
            case 4:
                //row 2 pos 2
                tabletRowArray2.push(entry);
                break;
            case 5:
                //row 1 pos 3
                tabletRowArray1.push(entry);
                break;
            case 6:
                //row 2 pos 3
                tabletRowArray2.push(entry);
            break;
            case 7:
                //row 1 pos 4
                tabletRowArray1.push(entry);
                break;
            case 8:
                //row 2 pos 4
                tabletRowArray2.push(entry);
                break;
            case 9:
                //row 1 pos 5
                tabletRowArray1.push(entry);
            break;
            case 10:
                //row 2 pos 5
                tabletRowArray2.push(entry);
                break;
            case 11:
                //row 1 pos 6
                tabletRowArray2.push(entry);
                break;
            case 12:
                //row 2 pos 6
                tabletRowArray1.push(entry);
                break;
            case 13:
                //row 1 pos 7
                tabletRowArray2.push(entry);
                break;
            case 14:
                //row 2 pos 7
                tabletRowArray1.push(entry);
                break;
            case 15:
                //row 1 pos 8
                tabletRowArray2.push(entry);
            break;
        
            default:
                break;
        }
    })

    return (
        <div className={styles.masonry__masonryTablet}>
            <div className={styles.masonry__masonryRow}>
                {tabletRowArray1.map((artwork, index) => {
                    return (
                        <Card key={index} data={artwork} handleArtworkSelect={handleArtworkSelect} />
                    )
                })}
            </div>
            <div className={styles.masonry__masonryRow}>
                {tabletRowArray2.map((artwork, index) => {
                    return (
                        <Card key={index} data={artwork} handleArtworkSelect={handleArtworkSelect} />
                    )
                })}
            </div> 
        </div>
    )
}
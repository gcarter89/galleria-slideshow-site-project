import { Card } from '../../Card/Card';
import styles from '../Masonry.module.scss';


export function MasonryLaptop({ data }) {
    let laptopRowArray1 = []
    let laptopRowArray2 = []
    let laptopRowArray3 = []

    data.forEach((entry, index) => {
        switch (index + 1) {
            case 1:
                //row 1 pos 1
                laptopRowArray1.push(entry);
                break;
            case 2:
                //row 2 pos 1
                laptopRowArray2.push(entry);
                break;
            case 3:
                //row 3 pos 1
                laptopRowArray3.push(entry);
                break;
            case 4:
                //row 1 pos 2
                laptopRowArray1.push(entry);
                break;
            case 5:
                //row 2 pos 2
                laptopRowArray2.push(entry);
                break;
            case 6:
                //row 3 pos 2
                laptopRowArray3.push(entry);
            break;
            case 7:
                //row 1 pos 3
                laptopRowArray3.push(entry);
                break;
            case 8:
                //row 2 pos 3
                laptopRowArray2.push(entry);
                break;
            case 9:
                //row 3 pos 3
                laptopRowArray1.push(entry);
            break;
            case 10:
                //row 1 pos 4 == switched with row 2 pos 4
                laptopRowArray2.push(entry);
                break;
            case 11:
                //row 2 pos 4 === switched with row 1 pos 4
                laptopRowArray1.push(entry);
                break;
            case 12:
                //row 3 pos 4
                laptopRowArray3.push(entry);
                break;
            case 13:
                //row 1 pos 5
                laptopRowArray1.push(entry);
                break;
            case 14:
                //row 2 pos 5
                laptopRowArray2.push(entry);
                break;
            case 15:
                //row 3 pos 5
                laptopRowArray3.push(entry);
            break;
        
            default:
                break;
        }
    })

    
    
    return (
        <div className={styles.masonry__masonryLaptop}>
            <div className={styles.masonry__masonryRow}>
                {laptopRowArray1.map((artwork, index) => {
                    return (
                        <Card key={index} data={artwork} />
                    )
                })}
            </div>
            <div className={styles.masonry__masonryRow}>
                {laptopRowArray2.map((artwork, index) => {
                    return (
                        <Card key={index} data={artwork} />
                    )
                })}
                
            </div>
            <div className={styles.masonry__masonryRow}>
                {laptopRowArray3.map((artwork, index) => {
                    return (
                        <Card key={index} data={artwork} />
                    )
                })}
                
            </div>
        </div>
        
    )
}
import styles from '../Masonry.module.scss';
import { MasonryRow } from './MasonryRow';

export function MasonryDesktop({ data, handleArtworkSelect }) {
    let desktopRowArray1 = [];
    let desktopRowArray2 = [];
    let desktopRowArray3 = [];
    let desktopRowArray4 = [];

    data.forEach((entry, index) => {
        switch(index + 1) {
            case 1:
                //row 1 pos 1
                desktopRowArray1.push(entry);
                break;
            case 2:
                //row 2 pos 1
                desktopRowArray2.push(entry);
                break;
            case 3:
                //row 3 pos 1
                desktopRowArray3.push(entry);
                break;
            case 4:
                //row 4 pos 1
                desktopRowArray4.push(entry);
                break;
            case 5:
                //row 1 pos 2
                desktopRowArray1.push(entry);
                break;

            case 6:
                //row 2 pos 2
                desktopRowArray2.push(entry);
                break;
            case 7:
                //row 3 pos 2
                desktopRowArray3.push(entry);
                break;
            case 8:
                //row 4 pos 2
                desktopRowArray4.push(entry);
                break;
            case 9:
                //row 1 pos 3
                desktopRowArray1.push(entry);
                break;
            case 10:
                //row 2 pos 3
                desktopRowArray2.push(entry);
                break;
            case 11:
                // row 4 pos 3
                desktopRowArray4.push(entry);
                break;
            case 12:
                //row 1 pos 4
                desktopRowArray1.push(entry)
                break;
            case 13:
                // row 2 pos 4
                desktopRowArray2.push(entry);
                break;
            case 14:
                //row 3 pos 3
                desktopRowArray3.push(entry)
                break;
            case 15:
                desktopRowArray4.push(entry);
                break;
            default:
                break;
        }
    })


    return (
        <div className={styles.masonry__masonryDesktop}>
            <MasonryRow rowArray={desktopRowArray1} handleArtworkSelect={handleArtworkSelect} />
            <MasonryRow rowArray={desktopRowArray2} handleArtworkSelect={handleArtworkSelect} />
            <MasonryRow rowArray={desktopRowArray3} handleArtworkSelect={handleArtworkSelect} />
            <MasonryRow rowArray={desktopRowArray4} handleArtworkSelect={handleArtworkSelect} />
        </div>
    )
}
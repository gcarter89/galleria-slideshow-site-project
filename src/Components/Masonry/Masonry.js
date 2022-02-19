import styles from './Masonry.module.scss';
import { useMediaQuery } from '@mui/material';
import { MasonryMobile } from './_subcomponents/MasonryMobile';
import { MasonryTablet } from './_subcomponents/MasonryTablet';
import { MasonryLaptop } from './_subcomponents/MasonryLaptop';
import { MasonryDesktop } from './_subcomponents/MasonryDesktop';


export function Masonry({data}) {

    const mobileMatch = useMediaQuery('(max-width: 768px)');
    const tabletMatch = useMediaQuery('(max-width: 1024px)');
    const laptopMatch = useMediaQuery('(max-width: 1439px)');


    return (
        <main className={styles.masonry}>
            {
                mobileMatch ? 
                    <MasonryMobile data={data} />
                : 
                tabletMatch ? 
                    <MasonryTablet data={data} />
                :
                laptopMatch ?
                    <MasonryLaptop data={data} />
                : <MasonryDesktop data={data} />
            }
        </main>
    )
}
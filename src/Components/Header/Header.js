import styles from './Header.module.scss';
import Logo from '../../assets/shared/logo.svg';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';



export function Header({handleHeaderClick, isStart}) {

    const ref = useRef()

    useEffect(() => {
        ref.current.scrollIntoView();
    },[isStart])

    return (
        <header ref={ref} className={styles.header}>
            <motion.img 
                className={styles.header__logo}
                src={Logo} 
                alt='Galleria logo'
                initial={{opacity: 0, x: -200}}
                animate={{opacity: 1, x: 0, transition: { ease: [.6, .01, -.05, .95], duration: 1.6}}}
            />
            <motion.button 
                className={styles.header__button} 
                onClick={(e) => handleHeaderClick(e)}
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0, transition: { ease: [.6, .01, -.05, .95], duration: 1.6}}}
            >{isStart ? 'Stop Slideshow' : 'Start Slideshow'}</motion.button>
        </header>
    )
}
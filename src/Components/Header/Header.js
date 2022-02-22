import styles from './Header.module.scss';
import Logo from '../../assets/shared/logo.svg';
import { useEffect, useRef } from 'react';



export function Header({handleHeaderClick, isStart}) {

    const ref = useRef()

    useEffect(() => {
        ref.current.scrollIntoView();
    },[isStart])

    return (
        <header ref={ref} className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt='Galleria logo' />
            <button className={styles.header__button} onClick={(e) => handleHeaderClick(e)}>{isStart ? 'Stop Slideshow' : 'Start Slideshow'}</button>
        </header>
    )
}
import { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/shared/logo.svg';

export function Header() {
    const [isStart, setStart] = useState(false);

    function handleHeaderButtonClick(event) {
        event.preventDefault();
        setStart(!isStart);
    }

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt='Galleria logo' />
            <button className={styles.header__button} onClick={(e) => handleHeaderButtonClick(e)}>{isStart ? 'Stop Slideshow' : 'Start Slideshow'}</button>
        </header>
    )
}
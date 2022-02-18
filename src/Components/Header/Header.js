import styles from './Header.module.scss';
import Logo from '../../assets/shared/logo.svg';

export function Header({isStart, setStart}) {
    

    function handleClick(event) {
        event.preventDefault();
        setStart(!isStart);
    }

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt='Galleria logo' />
            <button className={styles.header__button} onClick={(e) => handleClick(e)}>{isStart ? 'Stop Slideshow' : 'Start Slideshow'}</button>
        </header>
    )
}
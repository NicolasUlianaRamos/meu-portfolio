import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import MenuHamburguer from '../../Imagens/Menu.svg';
import Logo from '../../assets/Imagens/Logo.jpg';

export function Header(){
    return(
        <header className={styles.cabecalho}>
            <img src={Logo} className={styles.cabecalho__logo} alt="Logo" />
            <input type="checkbox" id='caixa-menu' className={styles.caixaMenu} />
            <label htmlFor="caixa-menu">
                <img src={MenuHamburguer} className={styles.cabecalho__menuHamburguer} alt='Menu' />
            </label>
            <ul className={styles.menu}>
                <li className={styles.menu__li}> <Link className={styles.menu__link} to='/'>Início</Link> </li>
                <li className={styles.menu__li}> <Link className={styles.menu__link} to='/contatos'>Contatos</Link> </li>
            </ul>
        </header>
    )
}
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export function Footer(){
    return (
        <footer className={styles.rodape}>
            <h1 className={styles.rodape__titulo}>Contatos</h1>
            <div className={styles.rodape__links}>
                <Link to='https://www.linkedin.com/in/nicolas-uliana-ramos-233854268/' className={styles.rodape__link}><FaLinkedin className={styles.rodape__icone} /></Link>
                <Link to='https://www.instagram.com/nicolas__.ramos/' className={styles.rodape__link}><FiInstagram className={styles.rodape__icone} /></Link>
                <Link to='https://wa.me/5551986043494' className={styles.rodape__link}><FaWhatsapp className={styles.rodape__icone} /></Link>
                <Link to="https://github.com/NicolasUlianaRamos" className={styles.rodape__link}><FaGithub className={styles.rodape__icone} /></Link>
            </div>
        </footer>
    )
}
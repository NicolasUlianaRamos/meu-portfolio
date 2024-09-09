import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useEffect, useState } from 'react';

export function Card({img, nome, link}){
    const [imagem, setImagem] = useState('');

    useEffect(() => {
        const buscaImagem = require(`../../assets/Imagens/${img}.png`);
        setImagem(buscaImagem);
    }, [img])

    return(
        <div className={styles.card}>
            <img src={imagem} className={styles.card__img} />
            <div className={styles.card__textos}>
                <h2 className={styles.card__titulo}>{nome}</h2>
                <div className={styles.wrapper}>
                    <Link to={link} className={styles.card__link}><span>Ir para o site</span></Link>
                </div>
            </div>
        </div>
    )
}
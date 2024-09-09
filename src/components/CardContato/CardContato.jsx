import styles from './CardContato.module.css';


export function CardContato({icone, contato, texto}){

    return (
        <div className={styles.card}>
            <div className={styles.card__contatos}>
                <div className={styles.card__icone}>{icone}</div>
                <h2 className={styles.card__contato}>{contato}</h2>
            </div>
            <div className={styles.card__textos}>
                <p className={styles.card__texto}>{texto}</p>
            </div>
        </div>
    )
}
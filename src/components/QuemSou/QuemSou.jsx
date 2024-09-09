import { PerfilBanner } from '../PerfilBanner/PerfilBanner.jsx';
import styles from './QuemSou.module.css';

export function QuemSou(){
    return(
        <section className={styles.container}>
            <h1 className={styles.container__titulo}>
                Quem sou eu
            </h1>
            <PerfilBanner />
        </section>
    )
}
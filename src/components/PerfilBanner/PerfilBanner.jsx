import FotoPerfil from '../../assets/Imagens/Foto.jpeg';
import styles from './PerfilBanner.module.css';

export function PerfilBanner(){
    return(
        <div className={styles.perfil}>
            <div className={styles.perfil__banner}></div>
            <div className={styles.perfil__sobre}>
                <img src={FotoPerfil} className={styles.perfil__img} alt='Foto de Perfil' />
                <div>
                    <h1 className={styles.perfil__titulo}>Nicolas Uliana Ramos</h1>
                    <p className={styles.perfil__texto}>Desenvolvedor Junior Full Stack | NextJS, ReactJS, React Native, NodeJS, ExpressJS, C#, ASP.NET, PHP | Javascript, TypeScript | MySQL, MongoDB, PostgreSQL | APIs RESTful | Java</p>
                </div>
            </div>
        </div>
    )
}
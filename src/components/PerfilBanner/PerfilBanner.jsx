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
                    <p className={styles.perfil__texto}>Desenvolvedor Júnior Full Stack Web / Mobile - HTML | CSS | JavaScript | React JS | React Native | Node JS | Express | TypeScript | MVC | MySQL | MongoDB | Sequelize | Git | API REST | RESTful | Java</p>
                </div>
            </div>
        </div>
    )
}
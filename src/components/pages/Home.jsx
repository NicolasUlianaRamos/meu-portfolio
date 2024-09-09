import { Helmet } from "react-helmet";
import { Conhecimentos } from "../Conhecimentos/Conhecimentos.jsx";
import { Projeto } from "../Projetos/Projeto.jsx";
import { QuemSou } from "../QuemSou/QuemSou.jsx";
import styles from './Home.module.css';

export function Home(){
    return (
        <div className={styles.main}>
            <Helmet>
                <title>Portfólio NUR | Início</title>
            </Helmet>

            <QuemSou />
            <Projeto />
            <Conhecimentos />
        </div>
    )
}
import { useState } from 'react';
import styles from './Conhecimentos.module.css';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export function Conhecimentos(){
    const [cardsConhecimentos, setCardsConhecimentos] = useState([
        {
            icone: <FaHtml5 className={`${styles.card__icone} ${styles.card__icone_html}`} />,
            nomeLinguagem: "HTML5"
        },
        {
            icone: <FaCss3Alt className={`${styles.card__icone} ${styles.card__icone_css}`} />,
            nomeLinguagem: "CSS3"
        },
        {
            icone: <FaBootstrap className={`${styles.card__icone} ${styles.card__icone_bootstrap}`} />,
            nomeLinguagem: "Bootstrap"
        },
        {
            icone: <TbBrandJavascript className={`${styles.card__icone} ${styles.card__icone_javascript}`} />,
            nomeLinguagem: "JavaScript"
        },
        {
            icone: <FaReact className={`${styles.card__icone} ${styles.card__icone_react}`} />,
            nomeLinguagem: "React JS"
        },
        {
            icone: <FaNodeJs className={`${styles.card__icone} ${styles.card__icone_node}`} />,
            nomeLinguagem: "Node JS"
        },
        {
            icone: <SiExpress className={`${styles.card__icone} ${styles.card__icone_express}`} />,
            nomeLinguagem: "Express"
        },
        {
            icone: <SiTypescript className={`${styles.card__icone} ${styles.card__icone_typescript}`} />,
            nomeLinguagem: "TypeScript"
        },
        {
            icone: <SiMysql className={`${styles.card__icone} ${styles.card__icone_mysql}`} />,
            nomeLinguagem: "MySQL"
        },
        {
            icone: <SiMongodb className={`${styles.card__icone} ${styles.card__icone_mongodb}`} />,
            nomeLinguagem: "MongoDB"
        },
        {
            icone: <SiSequelize className={`${styles.card__icone} ${styles.card__icone_sequelize}`} />,
            nomeLinguagem: "Sequelize"
        },
        {
            icone: <FaGitAlt className={`${styles.card__icone} ${styles.card__icone_git}`} />,
            nomeLinguagem: "Git"
        },
        {
            icone: <FaJava className={`${styles.card__icone} ${styles.card__icone_java}`} />,
            nomeLinguagem: "Java"
        }
    ]);

    return(
        <section className={styles.container} id="conhecimentos">
            <h1 className={styles.container__titulo}>Meus conhecimentos</h1>
            <div className={styles.container__cards}>
                {
                    cardsConhecimentos.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.card__iconeDiv}>{card.icone}</div>
                            <div className={styles.card__textos}>
                                <h2 className={styles.card__titulo}>{card.nomeLinguagem}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
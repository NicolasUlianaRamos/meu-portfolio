import { useState } from 'react';
import { Card } from '../Cards/Card';
import styles from './Projeto.module.css';

export function Projeto(){
    const [projetos, setProjetos] = useState([
        {
            img: "monibank",
            nome: "MoniBank",
            link: "https://nicolasulianaramos.github.io/MoniBank-alura/"
        },
        {
            img: "7DaysOfCode",
            nome: "OptimusTech",
            link: "https://nicolasulianaramos.github.io/7DaysOfCode/"
        },
        {
            img: "Organo",
            nome: "Organo",
            link: "https://organo-steel.vercel.app/"
        },
        {
            img: "Fruta-E-Fruto",
            nome: "Fruta & Fruto",
            link: "https://nicolasulianaramos.github.io/Alura-Bootstrap/"
        },
        {
            img: "AluraBooks",
            nome: "AluraBooks",
            link: "https://nicolasulianaramos.github.io/Alura-Books/"
        },
        {
            img: "Apeperia",
            nome: "Apeperia",
            link: "https://nicolasulianaramos.github.io/Apeperia/"
        },
        {
            img: "AluraPlay",
            nome: "AluraPlay",
            link: "https://nicolasulianaramos.github.io/Alura-Play/"
        },
        {
            img: "AluraGrid",
            nome: "AluraGrid",
            link: "https://nicolasulianaramos.github.io/Alura-Grid/"
        },
        {
            img: "Culturama",
            nome: "Culturama",
            link: "https://nicolasulianaramos.github.io/culturama-e8b36aa5679342f07f552370ae616e3475d41d13/"
        },
        {
            img: "AluraBooks-form",
            nome: "Formulário AluraBooks",
            link: "https://nicolasulianaramos.github.io/js-consumindo-dados-api-main/"
        },
        {
            img: "Alurinha",
            nome: "Alurinha",
            link: "https://nicolasulianaramos.github.io/Alurinha/"
        }
    ])

    return (
        <section className={styles.container}>
            <h1 className={styles.container__titulo}>Meus projetos</h1>

            <div className={styles.container__projetos}>
                {projetos.map((projeto, index) => (
                    <Card key={index} img={projeto.img} nome={projeto.nome} link={projeto.link} />
                ))}
            </div>
        </section>
    )
}
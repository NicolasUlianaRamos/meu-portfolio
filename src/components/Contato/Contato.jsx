import styles from './Contato.module.css';

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";

import { CardContato } from '../CardContato/CardContato';
import { useState } from 'react';

export function Contato(){
    const [cards, setCards] = useState([
        {
            icone: <MdEmail />,
            contato: "E-Mail",
            texto: "nicolasuliana10@gmail.com"
        },
        {
            icone: <BsFillTelephoneFill />,
            contato: "Telefone / Ligação",
            texto: "+55 (51) 98604-3494"
        },
        {
            icone: <MdMapsHomeWork />,
            contato: "Localização",
            texto: "Zona Norte de Porto Alegre - RS"
        }
    ]);

    return (
        <section className={styles.container}>
            <h1 className={styles.container__titulo}>Contato Via:</h1>
            <div className={styles.container__cards}>
                {cards.map((card, index) => (
                    <CardContato key={index} icone={card.icone} contato={card.contato} texto={card.texto} />
                ))}
            </div>
        </section>
    )
}
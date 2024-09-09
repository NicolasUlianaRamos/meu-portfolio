import styles from './Contatos.module.css';

import { Contato } from '../Contato/Contato';
import { QuemSou } from '../QuemSou/QuemSou';

import { Helmet } from 'react-helmet';

export function Contatos(){

    return (
        <div className={styles.main}>
            <Helmet>
                <title>Portfólio NUR | Contatos</title>
            </Helmet>
            <Contato />
            <QuemSou />
        </div>
    )
}
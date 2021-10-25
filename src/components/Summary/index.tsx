import { useContext } from 'react';
import inconeImg from '../../assets/income.svg'
import outconeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContex } from '../../TransactionContext';

import {Container} from './styles'

export function Summary(){

    const transactions = useContext( TransactionContex);
    console.log(transactions)

    return(

        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inconeImg} alt="Entradas" />
                </header>
                <strong> R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outconeImg} alt="Entradas" />
                </header>
                <strong> -R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong> R$ 500,00</strong>
            </div>


        </Container>

    )
}
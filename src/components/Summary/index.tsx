import { useContext } from 'react';
import inconeImg from '../../assets/income.svg'
import outconeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContex } from '../../TransactionContext';

import { Container } from './styles'

export function Summary() {

    const { transactions } = useContext(TransactionContex);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.aumont;
            acc.total += transaction.aumont;
        } else {
            acc.withdraws += transaction.aumont;
            acc.total -= transaction.aumont;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (

        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inconeImg} alt="Entradas" />
                </header>
                <strong> {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outconeImg} alt="Entradas" />
                </header>
                <strong> {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong> {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>


        </Container>

    )
}
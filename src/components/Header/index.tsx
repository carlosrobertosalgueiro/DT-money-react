import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { Interface } from 'readline'
import logoImg from '../../assets/logo.svg'
import { TransactionContex } from '../../TransactionContext'
import { Container, Content } from './styles'


interface HeaderProps {

    onOpenNewtransactionModal:()=> void;

}

export function Header({onOpenNewtransactionModal}:HeaderProps ) {
    
    const data = useContext(TransactionContex)

    

    return (

        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewtransactionModal} >
                    Nova Transação
                </button>
            </Content>
        </Container>

    )
}
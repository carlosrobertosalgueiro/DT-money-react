import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './style'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit')



    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overley'
            className='react-modal-content'

        >

            <Container>
                <button type='button'
                    onClick={onRequestClose}  >
                    <img src={closeImg}
                        alt="Fechar Modal"
                        className="react-modal-close"
                    />
                </button>

                <h2>Cadastrar Transação</h2>

                <form action="">
                    <input type="text"
                        placeholder="Titulo"
                    />
                    <input type="number"
                        placeholder="Valor"
                    />
                    <TransactionTypeContainer>

                        <RadioBox
                            type='button'
                            onClick={() => { setType('deposit') }}
                            isActive={type === 'deposit'}
                        >
                            <img src={incomeImg}
                                alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox
                            type='button'
                            onClick={() => { setType('withdraw') }}
                            isActive={type === 'withdraw'}>
                            <img src={outcomeImg}
                                alt="Saida" />
                            <span>Saída</span>
                        </RadioBox>

                    </TransactionTypeContainer>

                    <input type="text"
                        placeholder="Categoria"
                    />

                    <button type="submit">
                        Cadastrar
                    </button>

                </form>
            </Container>


        </Modal>

    )
}
import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './style'
import { TransactionContex } from '../../TransactionContext'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../Services/api'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    
    const {createTransaction} =useContext(TransactionContex)

    const [title, setTitle] = useState('')
    const [aumont, setAumont] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

 async   function hendleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
      await  createTransaction({
            title,
            aumont,
            category,
            type
        })

        setTitle('')
        setAumont(0)
        setType('deposit')
        setCategory('')

        onRequestClose()
   
    }


    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overley'
            className='react-modal-content'>

            <button type='button'
                onClick={onRequestClose}  >
                <img src={closeImg}
                    alt="Fechar Modal"
                    className="react-modal-close"
                />
            </button>

            <Container onSubmit={hendleCreateNewTransaction} >

                <h2>Cadastrar Transação</h2>


                <input type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input type="number"
                    placeholder="Valor"
                    value={aumont}
                    onChange={event => setAumont(Number(event.target.value))}
                />

                <TransactionTypeContainer>

                    <RadioBox
                        type='button'
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg}
                            alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                         isActive={type === 'withdraw'}
                        activeColor='red'
                    >

                        <img src={outcomeImg}
                            alt="Saida" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>



            </Container>

        </Modal>

    )
}
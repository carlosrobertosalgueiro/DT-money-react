import Modal from 'react-modal'
import { Container } from './style'

interface NewTransactionModalProps {
    isOpen:boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen}
         onRequestClose={onRequestClose} 
         overlayClassName='react-modal-overley'
         className='react-modal-content'
         
         >
            <h2>Cadastrar Transação</h2>
            <Container>
                <form action="">
                <input type="text" placeholder="Titulo" />
                <input type="number" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
                </form>
            </Container>


        </Modal>

    )
}
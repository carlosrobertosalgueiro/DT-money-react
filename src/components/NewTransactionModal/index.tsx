import Modal from 'react-modal'
import { Container } from './style'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
                    <input type="text" placeholder="Titulo" />
                    <input type="number" placeholder="Valor" />
                    <input type="text" placeholder="Categoria" />
                    <button type="submit">Cadastrar</button>
                </form>
            </Container>


        </Modal>

    )
}
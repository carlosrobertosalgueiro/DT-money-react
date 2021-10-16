import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)


  function hendleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function hendleCloseNewtransactionModal() {
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewtransactionModal={hendleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionsModalOpen}  onRequestClose={hendleCloseNewtransactionModal} />
      <GlobalStyle />
    </>
  );
}



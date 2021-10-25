import { createContext, ReactNode, useEffect,useState } from "react";

import { api } from "./Services/api";


interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    aumont: number,
    createdAt: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProvaiderProps{
    children: ReactNode;
}
interface TransactionContextData{
transactions: Transaction[];
createTransaction: (transaction : TransactionInput) => Promise<void>;
}

export const TransactionContex = createContext<TransactionContextData>(
    {} as TransactionContextData
)

export function TransactionProvaider({children}:TransactionProvaiderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))

    }, [])

  async  function createTransaction (Transaction:TransactionInput){
        
   const response = await  api.post('/transactions', {... Transaction, 
    createdAt: new Date()} )
   const {transaction} = response.data;

   setTransactions([
       ...transactions, 
         transaction
     ])
    }

    return(
        <TransactionContex.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionContex.Provider>
    )
}
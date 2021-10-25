import { useContext, useEffect, useState } from "react";
import { TransactionContex } from "../../TransactionContext";
import { api } from "../../Services/api";
import { Container } from "./style";




export function TransactionTable() {

   const {transactions} = useContext( TransactionContex);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                     return (
                        <tr key={transaction.id} >

                            <td>{transaction.title}</td>


                            <td className={transaction.type} >
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.aumont)}</td>

                            <td>{transaction.category}</td>

                            <td>{new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(transaction.createdAt))}
                            </td>

                        </tr>
                    )}
                    )}

                </tbody>

            </table>
        </Container>

    )

}
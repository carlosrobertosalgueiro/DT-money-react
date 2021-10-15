import { Container } from "./style";

export function TransactionTable(){

        return(
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
                <tr>
                    <td>Desenvolmento de website</td>
                    <td className="deposit">R$ 1000,00</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw" >R$ -500,00</td>
                    <td>Desenvolvimento</td>
                    <td>05/02/2021</td>
                </tr>
               
            </tbody>

            </table>
            </Container>

        )

}
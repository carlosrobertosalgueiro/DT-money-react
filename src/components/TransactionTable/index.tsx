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
                    <td>R$ 1200,00</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Desenvolmento de website</td>
                    <td>R$ 1200,00</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Desenvolmento de website</td>
                    <td>R$ 1200,00</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
            </tbody>

            </table>

            </Container>

        )

}
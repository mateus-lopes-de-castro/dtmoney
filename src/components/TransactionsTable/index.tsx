import { Container } from "./styles";

export function TransactionsTable(){
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
                    <tr>
                        <td>Desenvolvimento Site</td>
                        <td className="deposit">R$ 8.323,22</td>
                        <td>Desenvolvimento</td>
                        <td>19/10/2021</td>   
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">-R$ 832,32</td>
                        <td>Desenvolvimento</td>
                        <td>19/10/2021</td>   
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
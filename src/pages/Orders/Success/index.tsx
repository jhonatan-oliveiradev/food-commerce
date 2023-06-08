import { useParams } from "react-router-dom";

import { Head } from "../../../components/Head";
import { Container, Inner, Link, SubTitle, Table, Title } from "./styled";

export default function OrderSuccessPage() {
  const { orderId } = useParams();
  return (
    <Container>
      <Head title='Compra Realizada com Sucesso!' />
      <Inner>
        <Title>Compra Realizada com Sucesso!</Title>
        <p>
          Número do Pedido: <code>#{orderId}</code>
        </p>
        <SubTitle>Dados de Contato da Loja</SubTitle>
        <Table>
          <li>
            <span>Endereço:</span> Av Central, 123
          </li>
          <li>
            <span>Tel:</span> 11 98765-4321
          </li>
        </Table>
        <br />
        <Link href='/'>Voltar à Página Inicial</Link>
      </Inner>
    </Container>
  );
}

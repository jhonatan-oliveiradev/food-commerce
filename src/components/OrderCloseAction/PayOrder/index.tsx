import { currencyFormat } from "../../../helpers/currencyFormat";
import { useCart } from "../../../hooks/useCart";
import { Container } from "../styles";

export function PayOrder() {
  const { cart } = useCart();

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return (
    <Container>
      <button type='button'>Pagar</button>
      <span>
        Total: <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  );
}

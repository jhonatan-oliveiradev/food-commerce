import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";
import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";

export function OrderHeader() {
  const { cart } = useCart();

  return (
    <Container>
      <Link to={"/"}>
        <img src={logoImg} alt='Food Commerce' />
      </Link>

      <div>
        <div>
          <h3>Meu carrinho</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, "0")}</strong>{" "}
            {cart.length <= 1 ? "item" : "itens"}
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  );
}

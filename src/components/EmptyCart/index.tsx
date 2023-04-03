import manAndBurgerImg from "../../assets/man-and-burger.svg";
import { Button, Container } from "./styles";

interface EmptyCartProps {
  title: string;
}

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Ver cardápio</Button>
      <img src={manAndBurgerImg} alt='um hamburguer gigante e um homem ao seu lado' />
    </Container>
  );
}

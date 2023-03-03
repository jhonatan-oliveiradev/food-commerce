import { useContext } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { SnackContext } from "../../../contexts/SnackContext";
import Snacks from "../../../components/Snacks";

export default function Drinks() {
  const { drinks } = useContext(SnackContext);

  return (
    <>
      <Head title='Bebidas' description='Escolha uma bebida pra acompanhar sua refeição' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  );
}

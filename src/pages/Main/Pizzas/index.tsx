import { useContext } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";
import { SnackContext } from "../../../contexts/SnackContext";

export default function Pizzas() {
  const { pizzas } = useContext(SnackContext);

  return (
    <>
      <Head title='Pizzas' description='Pizzas deliciosas dignas da sua fome!' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  );
}

import { useSnack } from "../../../hooks/useSnack";

import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";

export default function Pizzas() {
  const { pizzas } = useSnack();

  return (
    <>
      <Head title='Pizzas' description='Pizzas deliciosas dignas da sua fome!' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  );
}

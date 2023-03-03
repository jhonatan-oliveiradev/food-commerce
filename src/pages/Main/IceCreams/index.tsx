import { useSnack } from "../../../hooks/useSnack";

import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";

export default function IceCreams() {
  const { iceCreams } = useSnack();

  return (
    <>
      <Head
        title='Sobremesas'
        description='Nada melhor que uma deliciosa sobremesa depois de uma refeição incrível!'
      />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  );
}

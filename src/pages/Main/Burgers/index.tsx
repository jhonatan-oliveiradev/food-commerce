import { useState, useEffect } from "react";
import { Head } from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";

import { getBurgers } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";

export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers();

      setBurgers(burgerRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burgers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  );
}

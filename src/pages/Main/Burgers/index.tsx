import { useContext } from "react";
import { Head } from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { SnackContext } from "../../../contexts/SnackContext";

export default function Burgers() {
  const { burgers } = useContext(SnackContext);

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burgers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  );
}

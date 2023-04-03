import { useEffect, useState } from "react";

import { EmptyCart } from "../../../components/EmptyCart";
import { useCart } from "../../../hooks/useCart";
import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";

export function Table() {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const { cart } = useCart();

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    }

    window.addEventListener("resize", updateTableComponentBasedInWindowWidth);

    return () => {
      window.removeEventListener("resize", updateTableComponentBasedInWindowWidth);
    };
  }, []);

  if (cart.length === 0) return <EmptyCart title='Seu carrinho está vazio. Comece a pedir!' />;

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
}

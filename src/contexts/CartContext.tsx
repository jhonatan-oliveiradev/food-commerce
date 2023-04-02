import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

import { snackEmoji } from "../helpers/snackEmoji";
import { SnackData } from "../interfaces/SnackData";

interface Snack extends SnackData {
  quantity: number;
  subtotal: number;
}

// interface RemoveSnackFromCart {
//   id: number;
//   snack: string;
// }

// interface UpdateCartProps {
//   id: number;
//   snack: string;
//   newQuantity: number;
// }

interface CartContextProps {
  cart: Snack[];
  addSnackIntoCart: (snack: SnackData) => void;
  removeSnackFromCart: (snack: Snack) => void;
  snackCartIncrement: (snack: Snack) => void;
  snackCartDecrement: (snack: Snack) => void;
  confirmOrder: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([]);

  function addSnackIntoCart(snack: SnackData): void {
    // buscar
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    );

    // atualizar
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1;
          const subtotal = quantity * item.price;

          return { ...item, quantity, subtotal };
        }

        return item;
      });

      toast.success(`Outro ${snackEmoji(snack.snack)} ${snack.name} adicionado ao carrinho!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setCart(newCart);

      return;
    }

    // adicionar

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
    const newCart = [...cart, newSnack];

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado ao carrinho!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setCart(newCart);
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack));

    setCart(newCart);
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) return;

    const snackExistentInCart = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack,
    );

    if (!snackExistentInCart) return;

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        const subtotal = newQuantity * item.price;

        return { ...item, quantity: newQuantity, subtotal };
      }

      return item;
    });

    setCart(newCart);
  }

  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1);
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1);
  }

  function confirmOrder(): void {
    return;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { snackEmoji } from "../helpers/snackEmoji";
import { CustomerData } from "../interfaces/CustomerData";
import { Snack } from "../interfaces/Snack";
import { SnackData } from "../interfaces/SnackData";
import { processCheckout } from "../services/api";

interface CartContextProps {
  cart: Snack[];
  addSnackIntoCart: (snack: SnackData) => void;
  removeSnackFromCart: (snack: Snack) => void;
  snackCartIncrement: (snack: Snack) => void;
  snackCartDecrement: (snack: Snack) => void;
  confirmOrder: () => void;
  payOrder: (customer: CustomerData) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

const localStorageKey = "@FoodCommerce:cart";

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey);
    if (value) return JSON.parse(value);
    return [];
  });

  function saveCart(items: Snack[]) {
    setCart(items);
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  }

  function clearCart() {
    localStorage.removeItem(localStorageKey);
  }

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
      saveCart(newCart);

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
    saveCart(newCart);
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack));

    saveCart(newCart);
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
    navigate("/payment");
  }

  async function payOrder(customer: CustomerData) {
    try {
      const response = await processCheckout(cart, customer);

      if (response.data.status !== "PAID") {
        toast.error(
          "Erro ao processar o pagamento. Por favor, revise as informações e tente novamente.",
        );
        return;
      }

      clearCart();

      navigate(`/order/success/${response.data.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Erro ao processar o pedido.");
    }
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
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

import { SnackData } from "../interfaces/SnackData";
import { getBurgers, getDrinks, getIceCreams, getPizzas } from "../services/api";
import { ReactNode, createContext, useEffect, useState } from "react";

interface SnackContextProps {
  burgers: SnackData[];
  drinks: SnackData[];
  pizzas: SnackData[];
  iceCreams: SnackData[];
}

interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers();
      const pizzaRequest = await getPizzas();
      const drinkRequest = await getDrinks();
      const iceCreamRequest = await getIceCreams();

      const requests = [burgerRequest, pizzaRequest, drinkRequest, iceCreamRequest];

      const [
        { data: burgerResponse },
        { data: pizzaResponse },
        { data: drinkResponse },
        { data: iceCreamResponse },
      ] = await Promise.all(requests);

      setBurgers(burgerResponse);
      setPizzas(pizzaResponse);
      setDrinks(drinkResponse);
      setIceCreams(iceCreamResponse);
    })();
  }, []);

  return (
    <SnackContext.Provider
      value={{
        burgers,
        pizzas,
        drinks,
        iceCreams,
      }}
    >
      {children}
    </SnackContext.Provider>
  );
}

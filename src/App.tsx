import { createContext, useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { Normalize } from "styled-normalize";
import { SnackData } from "./interfaces/SnackData";

interface SnackContextProps {
  burgers: SnackData[];
  drinks: SnackData[];
  pizzas: SnackData[];
  iceCreams: SnackData[];
}

const SnackContext = createContext({} as SnackContextProps);

export default function App() {
  const [] useState<SnackData[] > ([]);

useEffect(() => {
  (async () => {
    const burgerRequest = await getBurgers();

    setBurgers(burgerRequest.data);
  })();
}, []);

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider
          value={{
            burgers: [],
            drinks: [],
            pizzas: [],
            iceCreams: [],
          }}
        >
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}

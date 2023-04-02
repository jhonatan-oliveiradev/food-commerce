import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "./contexts/CartContext";
import { SnackProvider } from "./contexts/SnackContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  );
}

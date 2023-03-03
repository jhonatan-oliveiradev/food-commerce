import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { SnackProvider } from "./contexts/SnackContext";

import { Theme } from "./styles/Theme";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  );
}

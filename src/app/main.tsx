import { createRoot } from "react-dom/client";

import "./globals.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
);

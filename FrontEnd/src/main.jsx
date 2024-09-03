import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContexProvider from "./contex/ShopContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContexProvider>
      <App />
    </ShopContexProvider>
  </StrictMode>
);

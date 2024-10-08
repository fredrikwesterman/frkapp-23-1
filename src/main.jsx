import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GarnContext } from "./context/GarnProvider.jsx";

createRoot(document.getElementById("root")).render(
  <GarnContext>
    <StrictMode>
      <App />
    </StrictMode>
  </GarnContext>
);

import { App } from "./app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const DOCUMENT = document.getElementById("root");
if (DOCUMENT) {
  createRoot(DOCUMENT).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

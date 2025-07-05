import App from "@/components/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

const container = document.getElementById("root")!;
const root = createRoot(container);

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
});

import App from "@/components/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

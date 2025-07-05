import { createRoot } from "react-dom/client";
import HelloWorld from "@/components/HelloWorld";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<HelloWorld />);
  }
});

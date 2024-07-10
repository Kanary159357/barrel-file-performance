import { createRoot } from "react-dom/client";
import { A11111, B12222 } from "./component";

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <div>
    <B12222 />
    <A11111 />
  </div>
);

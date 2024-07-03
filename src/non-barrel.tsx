import React from "react";
import { createRoot } from "react-dom/client";
import A11115 from "./component/1/1/1/1/A11111";
const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(
  <div>
    <A11115 />
  </div>
);

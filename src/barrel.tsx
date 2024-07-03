import React from "react";
import { createRoot } from "react-dom/client";
import { A111 } from "./component";

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <div>
    <A111 />
  </div>
);

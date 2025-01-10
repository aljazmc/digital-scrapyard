import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <h1>App is here!</h1>;
}

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./App";
import Buttons from "./piles/Buttons";
import Navigations from "./piles/Navigations";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/navigations" element={<Navigations />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);

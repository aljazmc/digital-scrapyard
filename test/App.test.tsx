import React, { act } from "react";
import ReactDOM from "react-dom/client";

import App from "../src/App";

describe("App", () => {
  it("renders the App component", () => {
    const container = document.createElement("div");
    const component = <App />;
    document.body.appendChild(container);
    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("App is here!");
  });
});

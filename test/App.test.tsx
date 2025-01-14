import React, { act } from "react";
import ReactDOM from "react-dom/client";

import App from "../src/App";

describe("App", () => {
  let container: HTMLDivElement;
  const render = (component: React.ReactNode) =>
    act(() => ReactDOM.createRoot(container).render(component));

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders the App component", () => {
    render(<App />);
    expect(document.body.textContent).toContain("App is here!");
  });
});

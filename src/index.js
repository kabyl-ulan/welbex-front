import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//local dependencies
import "./style/index.scss";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Body } from "./index.styled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Body />
    <App />
  </React.StrictMode>
);

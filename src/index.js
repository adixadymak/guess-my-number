import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GuessContextProvider } from "./store/guess-context";

ReactDOM.render(
  <React.StrictMode>
    <GuessContextProvider>
      <App />
    </GuessContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
